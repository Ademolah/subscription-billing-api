const {listPLans, createPlans, updatePlans} = require('../controllers/plans-controller.js')
const express = require('express')

const router = express.Router()

router.get('/getPlans', listPLans)
router.post('/createPlans', createPlans)
router.put('/update', updatePlans)


module.exports = router