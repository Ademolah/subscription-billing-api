const jwt = require('jsonwebtoken')
const User = require('../models/user-model.js')

async function authMiddleware(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    console.log(token)

    if(!token){
            return res.status(401).json({
                success: false,
                message: 'You are not authenticated'
            })
        }


    try {

        const decodedToken =  jwt.verify(token, process.env.JWT_TOKEN_KEY)

        console.log(decodedToken)
        req.userInfo = decodedToken

        next()
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Something went wrong : ${error}`
        })
    }
}



module.exports = {authMiddleware}