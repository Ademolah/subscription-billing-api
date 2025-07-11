require('dotenv').config()
const express = require('express')
// const nodemailer = require('nodemailer')
// const notifyRoutes = require('./routes/noti-route.js')
const {sendEmail, webhook, paymentEmail} = require('./controllers/noti-controller.js')
const { subscribe } = require('./helpers/rabbitmq.js')



const app = express()

app.use(express.json())

subscribe('user.subscribed', async(event)=>{
    console.log('Notify: user subscribed ', event);
    sendEmail()
})

subscribe('payment.success', async(event)=>{
    console.log('Notify: payment made', event);
    paymentEmail()
})

webhook()

// app.use('api/v1/notification', notifyRoutes)

app.listen(3002, ()=>{
    console.log('Notification server listening on port 3002')
})