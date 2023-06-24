const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const ethers = require('ethers');
const auth = require("./middleware/auth");
const pagoLinkAbi = require("./pagolink.json").abi;
// const { randomUUID } = require('crypto');
// const path = require("path");

require("dotenv").config();
require("./config/database").connect();



// importing user context
const Merchant = require("./model/merchant");
const Payment = require("./model/payment");

const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to Pagolink!");
});

app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;

        if (!(email && password && firstName && lastName && username)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await Merchant.findOne({ email });

        if (oldUser) {
            return res.status(409).send("Account exist!");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const merchant = await Merchant.create({
            firstName,
            lastName,
            balance: 0,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            username: username.toLowerCase(),
            password: encryptedPassword,
        });

        const token = jwt.sign(
            { merchantId: merchant._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "3d",
            }
        );

        merchant.token = token;

        // return new user
        res.status(201).json({ firstName, lastName, balance: 0, email, username, token });
    } catch (err) {
        console.log(err);
    }
});

app.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }

        const merchant = await Merchant.findOne({ email });

        if (merchant && (await bcrypt.compare(password, merchant.password))) {
            const token = jwt.sign(
                { merchantId: merchant._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "3d",
                }
            );

            merchant.token = token;
            const { firstName, lastName, balance, payments } = merchant;

            res.status(200).json({ firstName, lastName, email, balance, token, payments });
        } else {
            res.status(400).send("Invalid Credentials");
        }
    } catch (err) {
        console.log(err);
    }
});

app.get("/profile", auth, async (req, res) => {
    try {
        const { email } = req.merchant;
        const merchant = await Merchant.findOne({ email });
        const { firstName, lastName, username, balance, payments } = merchant;
        res.status(200);
        res.send({ firstName, lastName, email, username, email, balance, payments });
    } catch (err) {
        res.status(400);
        res.send("Bad request");
    }
});

app.post('/create-payment', auth, async (req, res) => {
    const { amount, description } = req.body;
    const { email } = req.merchant;
    const merchant = await Merchant.findOne({ email });

    const payment = await Payment.create({
        amount,
        description,
        merchant: merchant.username,
        paid: false
    });

    res.status(200).json(payment._id);
});

app.get("/pay/:paymentId", async (req, res) => {
    const { paymentId } = req.params;
    const payment = await Payment.findOne({ _id: paymentId });
    if (payment) {
        res.status(200);
        const { amount, merchant, description } = payment;
        res.render('payment', { paymentId, amount, merchant, description });
    } else {
        res.status(404);
        res.send("Payment not found!");
    }
});

// Listen to smart contract for payment and update user balance
const pagoLinkAddress = "0xEeb835cC060b861ec2D9534E7Fdb4dE8A50ff52b";
const provider = new ethers.providers.JsonRpcProvider("https://testnet.hashio.io/api");//, { chainId: 296, name: "Hedera Testnet" });

const contract = new ethers.Contract(pagoLinkAddress, pagoLinkAbi, provider);
contract.on("PaymentSuccessful", async (paymentId, payer, merchant, amount, token) => {
    try {
        const value = ethers.utils.formatEther(amount);

        const user = await User.findOne({ username: merchant });
        let balance = user.balance || 0;
        balance = Number(balance) + Number(value);
        const payment = await Payment.findById(paymentId);
        const payments = user.payments;
        payments.unshift(payment);
        await User.updateOne({ username: merchant }, { balance, transactions: payments });
    } catch (err) {
        console.log(err)
    }
});

module.exports = app;