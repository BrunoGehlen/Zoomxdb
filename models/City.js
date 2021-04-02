const mongoose = require('mongoose')

const CitySchema = mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    stateId: {
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

module.exports = mongoose.model('City', CitySchema)
