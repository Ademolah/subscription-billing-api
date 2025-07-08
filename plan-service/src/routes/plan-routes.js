const {listPlans, createPlans, updatePlans, getSinglePlan, deletePlan} = require('../controllers/plans-controller.js')
const express = require('express')

const router = express.Router()

router.get('/getPlans', listPlans)
router.post('/createPlans', createPlans)
router.put('/update/:id', updatePlans)
router.delete('/delete/:id', deletePlan)
router.get('/getSinglePlan/:id', )


module.exports = router