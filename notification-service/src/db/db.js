const mongoose = require('mongoose')

async function db(){
    await mongoose.connect("mongodb://localhost:27017/").
    then(()=>console.log('Connected to plan service db successfully'))
    .catch((error)=>console.error(`Something went wrong ${error}`)
    )
}


module.exports = db