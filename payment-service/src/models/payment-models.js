const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    planId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Plan'},
    amount: {type: Number, required: true},
    currency: {type: Number, required: true},
    method: {type: String, required: true},
    status: {type: String, required: true},
    paidAt: {type: Date, required: true}
}, {timestamps: true})


const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment