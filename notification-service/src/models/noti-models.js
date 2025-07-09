const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    messageFrom: {type: String, default: 'binaryhq@outlook.com', required: true},
    messageTo: {type: String, required: true},
    subject: {type: String, required: true},
    text: {type: Text, required: true}
})


const Notification = mongoose.model('Notification', notificationSchema)


module.exports = Notification