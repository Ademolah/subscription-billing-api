const {getUsers, registerUsers} = require('../controller/users-controller.js')
const express = require('express')


const router = express.Router()


router.get('/users', getUsers)
router.post('/register', registerUsers)


module.exports = router