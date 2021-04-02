const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')

const app = express()
const bodyParser = require('body-parser')

const citiesRoute = require('./routes/cities')
const statesRoute = require('./routes/states')

require('dotenv/config')

app.use(bodyParser.json())
app.use(cors())

app.use('/states', statesRoute)
app.use('/cities', citiesRoute)

app.use(express.json())

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('connected to Database')
})
