const express = require('express')
const connectDb = require('./db/db.js')
const userRoute = require('./routes/user-routes.js')


connectDb()


const app = express()

app.use(express.json())


app.use('/api/v1/users', userRoute)



app.listen(3005, ()=>{
    console.log('App now listening on port 3000');
})