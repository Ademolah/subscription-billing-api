const express = require('express')
const {sendEmail, webhook} = require('../controllers/noti-controller.js')

const router = express.Router()


router.post('/notifyMail', sendEmail)
router.post('/webhook', webhook)


module.exports = router

