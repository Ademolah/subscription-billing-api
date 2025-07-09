require('dotenv').config()

const express = require('express')
const billingRoutes = require('./routes/billing-routes.js')
const connectDb = require('./db/billing-db.js')

const app = express()

connectDb()

app.use(express.json())

app.use('/api/v1/plans', billingRoutes)


app.listen(3003, ()=>{
    console.log('Billing service now listening on port 3003'); 
})
