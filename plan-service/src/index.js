const express = require('express')
const planRoutes = require('./routes/plan-routes.js')
const db = require('./db/plan-db.js')


const app = express()

db()

app.use(express.json())

app.use('/api/v1/plans', planRoutes)




app.listen(3004, ()=>{
    console.log('Plan service is listening on port 3004')
})