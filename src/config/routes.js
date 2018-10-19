const express = requide('express')

module.exports = function(server) {
    
    //Rotas.

    const router = express.Router()
    server.use('/api', route)

    // Rotas do TODO
    const todoService = require('../api/todo/todoservice')
    todoService.register(route, '/todos')

    

}