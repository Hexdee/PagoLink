const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    amount: { type: Number, default: null },
    merchant: { type: String },
    description: { type: String },
    paid: { type: Boolean, default: false },
    dateCreated : {type: Date},
    datePaid: {type: Date, default: null} 
});

module.exports = mongoose.model("payment", paymentSchema);