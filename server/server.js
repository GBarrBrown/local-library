const path = require('path')
const express = require('express')
const server = express()

const routeNameRoutes = require('./routes/routeName')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/api/v1/routeName', routeNameRoutes)

module.exports = server