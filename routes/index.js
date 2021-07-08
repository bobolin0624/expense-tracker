const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const expenses = require('./modules/expenses')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')
const auth = require('./modules/auth')

router.use('/users', users)
router.use('/expenses', authenticator, expenses)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router