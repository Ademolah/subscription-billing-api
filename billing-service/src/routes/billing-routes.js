const {subscribe, listActiveSubscriptions, cancelSubscription} = require('../controllers/billing-controllers.js')

const express = require('express')
const router = express.Router()

router.get('/activeSub/:userId', listActiveSubscriptions)
router.post('/cancel', cancelSubscription)
router.post('/subscribe', subscribe)



module.exports = router