const { Schema } = require('')

const Parks = new Schema(
    {
        park: { type: String, required: true },
        location: { type: String, required: true },
        address: {type: String, required: true },
        rides: { type: String, required: true }
    },
    {timestamps: true}
)

module.exports = Parks