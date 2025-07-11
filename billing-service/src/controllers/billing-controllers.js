const Billing = require('../models/billing-models.js')
const { publish } = require('../helpers/rabbitmq.js')

async function subscribe(req, res){
    try {

        const {userId, planId, startDate} = req.body

        const existing = await Billing.findOne({userId, planId, isActive: true})

        if(existing){
            return res.status(400).json({ message: 'User already subscribed to this plan' });
        }

        const newPlan = new Billing(
            {userId, 
            planId, 
            startDate: startDate ? new Date(startDate) : new Date(), 
            isActive: true}
            )

        await newPlan.save()

        res.status(201).json({
            success: true,
            message: 'New Plan created successfully',
            newPlan
        })

        await publish('user.subscribed', {
            userId,
            planId,
            subscribedAt: new Date()
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


async function cancelSubscription(req, res){
    try{
        const {userId, planId} = req.body

        const sub = await Billing.findOne({userId, planId, isActive: true})

        if(!sub){
            return res.status(404).json({
                success: false,
                message: 'No subscription found'
            })
        }

        sub.isActive = false;
        sub.endDate = new Date();

        await sub.save()

        res.status(200).json({
            success: true,
            message: 'Subscription cancelled sucessfully'
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


async function listActiveSubscriptions(req, res){
    try {
        const userId = req.params.userId
        const sub = await Billing.find({userId, isActive: true})

        res.json({sub})
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {subscribe, listActiveSubscriptions, cancelSubscription}