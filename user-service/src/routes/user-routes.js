const {getUsers, registerUsers, login, currentUser} = require('../controller/users-controller.js')
const express = require('express')

// const {authMiddleware} = require('../middlewares/auth-middleware.js')


const router = express.Router()



router.get('/fetchUsers', getUsers)
router.post('/register', registerUsers)
router.post('/login', login)
router.get('/me', currentUser)


module.exports = router