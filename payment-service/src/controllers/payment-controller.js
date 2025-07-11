const Payment = require('../models/payment-models.js')
const { publish } = require('../helpers/rabbitmq.js')

async function makePayment(req, res){
    try {
        const {userId, planId, amount, currency, method} = req.body

        const newPayment = new Payment({
            userId,
            planId,
            amount,
            currency: currency || 'USD',
            method,
            status: 'Success',
            paidAt: new Date()
        })

        await newPayment.save()

        res.status(200).json({
            success:true,
            message: 'Payment made successfully',
            newPayment
        })

        await publish('payment.success', {
            userId,
            planId,
            amount,
            paidAt: new Date()
        })

    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

async function paymentHistory(req, res){
    try {
        const userId = req.params.userId

        const user = await Payment.find({userId})
        if(!user){
            return res.status(404).json({
                message: 'No user found'
            })
        }

        res.status(200).json({
            user
        })
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {makePayment, paymentHistory}