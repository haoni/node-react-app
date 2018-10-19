const express = require('express')

module.exports = function(server) {
    
    //Rotas.
    const router = express.Router()
    server.use('/api', router)

    // Rotas do TODO
    const todoService = require('../api/todo/todoservice')
    todoService.register(router, '/todos')
}