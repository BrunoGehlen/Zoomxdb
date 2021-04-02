const express = require('express')

const router = express.Router()
const City = require('../models/City')

router.get('/', async (req, res) => {

    try{
        const cities = await City.find()
        res.json(cities)

    } catch (err) {
        res.json({message: err})

    }
})

router.post('/', async (req,res) => {

    const city = new City({
        name: req.body.name,
        stateId: req.body.stateId
    })

    try {
        const createdCity = await city.save()
        res.json(createdCity)

    } catch (err) {
        res.json({message: err})
    }
})

router.get('/:cityId', async (req,res) => {

    try {
        const city = await City.findById(req.params.cityId)
        res.json(city)

    } catch (err) {
        res.json({message: err})
    
    }
})

router.delete('/:cityId', async (req,res) => {

    try {
        const removedCity = await City.remove({ _id: req.params.cityId })
        res.json(removedCity)

    } catch (err) {
        res.json({message: err})

    }
})

router.patch('/:cityId', async (req, res) => {
    
    try {
        const updatedCity = await City.updateOne({ 
            _id: req.params.cityId 
        }, {
            $set: { ...req.body, lastAlterationDate: Date.now() }
        })
        res.json(updatedCity)

    } catch (err) {
        res.json({message: err})

    }
})

module.exports = router