require('dotenv').config()
const express = require('express')
const connectDb = require('./db/db.js')
const paymentRoute = require('./routes/payment-route.js')

const app = express()

connectDb()

app.use(express.json())

app.use('/api/v1/payment', paymentRoute)



app.listen(3004, ()=>{
    console.log('Payment server now listening on port 3004')
})