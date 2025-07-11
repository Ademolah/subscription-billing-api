const User = require('../models/user-model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function getUsers(req, res){
    try{
        const users = await User.find({})

        res.status(200).json({
            success: true,
            users
        })

    }catch(error){
        res.status(500).json({
            success: false,
            error
        })
    }
}

async function registerUsers(req, res){
    try {
        const {first_name, last_name, email, password} = req.body

        //check if a user with such email already exists
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(401).json({
                success: false,
                message: 'User already exist'
            })
        }

        //encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({
            success: true,
            message: "Successfully register new user",
            newUser
        })

        console.log('register user...')


    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

async function login(req, res){
    try{
        const {email, password} = req.body

        //check if user exists
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message: "No user found"
            })
        }

        //confirm the password
        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch){
            return res.status(401).json({
                success: false,
                message: 'Incorrect login credentials'
            })
        }

        //create access token
        const accessToken =  jwt.sign({
            userId : user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        }, process.env.JWT_TOKEN_KEY, {expiresIn: "10m"})


        res.status(200).json({
            success: true,
            message: "Login successful",
            accessToken
        })

    }catch (error){
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}

async function currentUser(req, res){
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
    
            const user = await User.findById(decodedToken.userId)

            res.status(200).json({
                user
            })
            
        } catch (error) {
            res.status(500).json({
                success: false,
                message: `Something went wrong : ${error}`
            })
        }
}




module.exports = {getUsers, registerUsers, login, currentUser}