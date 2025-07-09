const nodemailer = require('nodemailer')
const Notification = require('../models/noti-models.js')
const { transporter } = require('../helpers/helper.js')

async function sendEmail(req, res){
    try {
        const {messageFrom, messageTo, subject, text} = req.body
        await transporter.sendMail({
            from: messageFrom,
            to: messageTo,
            subject,
            text
        })

    } catch (error) {
        
    }
}