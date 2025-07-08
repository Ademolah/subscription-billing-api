const mongoose = require('mongoose')

const billingSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    planId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Plan'},
    startDate: {type: Date, required: true}
}, {timestamps: true})

const Billing = mongoose.model('Billings', billingSchema)


module.exports = Billing