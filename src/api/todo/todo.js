const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongosse.Schema({
    decription: { type: String, required: true },
    done: { type: Boolean, querired: true, default: false },
    createdAt: { type:Date, default: Date.Now }
})

module.exports = restful.mode('Todo', todoSchema)