const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    interval: {type: Number, required: true},
    feature: {type: String, required: true}
}, {timestamps: true})

const Plan = mongoose.model('Plan', planSchema)


module.exports = Plan