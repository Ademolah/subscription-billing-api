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

        res.status(200).json({
            message: 'Message sent successfully'
        })

    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}


//webhook
async function webhook(req, res){
    try{
        console.log('Webhook received ', req.body)
        res.status(200).json({
            message: 'Webhook recieved'
        })
    } catch(error){
        res.status(500).json({ error: err.message });
    }
}


module.exports = {sendEmail, webhook}