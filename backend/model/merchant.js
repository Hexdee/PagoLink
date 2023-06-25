const mongoose = require("mongoose");

const Payment = require("./payment");

const merchantSchema = new mongoose.Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    balance: { type: Number, default: 0 },
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
    token: { type: String },
    payments: [Payment.schema]
});

module.exports = mongoose.model("merchant", merchantSchema);