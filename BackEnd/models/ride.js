const { Schema } = require('mongoose')

const Rides = new Schema (
    {
        name: { type: String, required: true},
        length: {type: String, required: true},
        top_speed: {type: String, required: true},
        height: {type: String, required: true}
    }, 
    {timestamps: true}
)

module.exports = Rides