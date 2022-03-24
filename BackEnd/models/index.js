const { model } = require('mongoose')
const RideSchema = require('./ride')
const ParkSchema = require('./park')

const Rides = model('rides', RideSchema)
const Parks = model('parks', ParkSchema)

module.exports = {
    Rides,
    Parks
}