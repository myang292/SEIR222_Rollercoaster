const mongoose = require('mongoose')

mongoose
    .connect('')
    .then(() => {
           console.log('connected!')
     })
    .catch((e) => {
        console.error('connection error', e.message)
    })

mongoose.set('debug', true)
const db = mongoose.connection
module.exports = db