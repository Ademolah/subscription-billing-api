const {makePayment, paymentHistory} = require('../controllers/payment-controller.js')

const express = require('express')
const router = express.Router()

router.post('/makePayment', makePayment)
router.get('/fetchPayment/:userId', paymentHistory)


module.exports = router