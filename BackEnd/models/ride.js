const { ObjectId } = require('bson')
const { Schema } = require('mongoose')

const Rides = new Schema (
    {
        name: { type: String, required: true},
        park: { type: ObjectId, required: true},
        description: { type: String, required: true },
        height: { type: Number, required: true },
        length: { type: Number, required: true },
        speed: { type: Number, required: true },
        type: { type: String, required: true },
        img: { type: String, required: true }
    }, 
    {timestamps: true}
)

module.exports = Rides