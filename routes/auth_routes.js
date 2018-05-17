const express = require('express')
const controller = require('../controllers/auth_controller')
const routes = express.Router();

routes.post('/login', controller.login)
routes.get('/login', controller.get)
routes.post('/register', controller.register)

module.exports = routes