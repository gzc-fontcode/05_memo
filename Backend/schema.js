const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/task')

const tasksschema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    }
})
const Task = mongoose.model('Task',tasksschema)
module.exports = Task