const mongoose = require('mongoose')

const billingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true}
}, {timestamps: true})

const Billing = mongoose.model('Billings', billingSchema)


module.exports = Billing