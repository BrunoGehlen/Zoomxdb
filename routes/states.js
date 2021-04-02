const express = require('express')

const router = express.Router()
const State = require('../models/State')

router.get('/', async (req, res) => {

    try{
        const states = await State.find()
        res.json(states)

    } catch (err) {
        res.json({message: err})
    
    }
})

router.post('/', async (req,res) => {

    const state = new State({
        name: req.body.name,
        abreviation: req.body.abreviation
    })

    try {
        const createdState = await state.save()
        res.json(createdState)

    } catch (err) {
        res.json({message: err})
    }
})

router.get('/:stateId', async (req,res) => {

    try {
        const state = await State.findById(req.params.stateId)
        res.json(state)

    } catch (err) {
        res.json({message: err})
    
    }
})

router.delete('/:stateId', async (req,res) => {

    try {
        const removedState = await State.remove({ _id: req.params.stateId })
        res.json(removedState)

    } catch (err) {
        res.json({message: err})

    }
})

router.patch('/:stateId', async (req, res) => {
    
    try {
        const updatedState = await State.updateOne({ 
            _id: req.params.stateId
        }, {
            $set: { ...req.body, lastAlterationDate: Date.now() }
        })
        res.json(updatedState)

    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router