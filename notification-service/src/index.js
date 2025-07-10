require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const notifyRoutes = require('./routes/noti-route.js')


const app = express()

app.use(express.json())


app.use('api/v1/notification', notifyRoutes)

app.listen(3002, ()=>{
    console.log('Notification server listening on port 3005')
})