const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    amount: { type: Number, default: null },
    merchant: { type: String },
    description: { type: String },
    paid: { type: Boolean, default: false }
});

module.exports = mongoose.model("payment", paymentSchema);