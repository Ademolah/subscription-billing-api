const {makePayment, paymentHistory} = require('../controllers/payment-controller.js')

const express = require('express')
const router = express.Router()

router.post('/payment', makePayment)
router.get('/fetchPayment', paymentHistory)


module.exports = router