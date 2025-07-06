const mongoose = require('mongoose')

async function connectDb(){
    try {
        mongoose.connect('mongodb://localhost:27017/')
        console.log('Connected to db successfully');
        
    } catch (error) {
        console.error('Something went wrong ', error);
        
    }
}

module.exports = connectDb