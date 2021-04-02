const mongoose = require('mongoose')

const StateSchema = mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    abreviation: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    lastAlterationDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('State', StateSchema)