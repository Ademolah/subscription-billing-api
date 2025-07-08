const Plan = require('../models/plans-models.js')

async function listPlans(req, res){
    try {
        const plans = await Plan.find({})

        res.status(200).json({
            plans
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


async function createPlans(req, res){
    try {
        const {name, price, interval, feature} = req.body

        const newService = new Plan({name, price, interval, feature})

        await newService.save()

        res.status(201).json({
            success: true,
            message: 'New plan created ',
            newService
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function updatePlans(req, res){
    try {
        const id = req.params.id
        
        const planToUpdate = await Plan.findByIdAndUpdate(id, req.body, {new: true})

        if(!planToUpdate){
            return res.status(400).json({
                message: "No plan found"
            })
        }

        res.status(201).json({
            success: true,
            planToUpdate
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function getSinglePlan(req, res){
    try {
        const id = req.params.id 
        const plan = await Plan.findById(id)

        if(!plan){
            return res.status(400).json({
                message: "No plan found"
            })
        }

        res.status(200).json({
            plan
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function deletePlan(req, res){
    try {
        const id = req.params.id
        const planToDelete = await Plan.findByIdAndDelete(id)

        if(!planToDelete){
            return res.status(400).json({
                message: "No plan found"
            })
        }

        res.status(200).json({
            message: "Successfully deleted plan"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {listPlans, createPlans, updatePlans, getSinglePlan, deletePlan}