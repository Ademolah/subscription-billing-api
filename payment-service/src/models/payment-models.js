const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    planId: {type: String, required: true},
    amount: {type: Number, required: true},
    currency: {type: String, required: true},
    method: {type: String, required: true},
    status: {type: String, required: true},
    paidAt: {type: Date, required: true}
}, {timestamps: true})


const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment