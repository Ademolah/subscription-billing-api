const express = require('express')
const planRoutes = require('./routes/plan-routes.js')


const app = express()

app.use(express.json())

app.use('/api/v1/plans', planRoutes)




app.listen(3001, ()=>{
    console.log('Plan service is listening on port 3001');
    
})