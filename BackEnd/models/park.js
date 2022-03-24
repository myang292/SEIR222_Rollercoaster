const { Schema } = require('mongoose')

const Parks = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        address: { type: String, required: true },
        url: { type: String, required: true },
        img: { type: String, required: true },
    },
    {timestamps: true}
)

module.exports = Parks