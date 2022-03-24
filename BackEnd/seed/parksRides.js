const db = require('../db')
const { Park, Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Parks = [
        {
            park: '',
            location: '',
            address: '',
            rides: ''
        },
        {
            park: '',
            location: '',
            address: '',
            rides: ''
        }
    ]

    const Rides = [
        {
            name: '',
            length: '',
            top_speed: '',
            height: ''
        },
        {
            name: '',
            length: '',
            top_speed: '',
            height: ''
        }
    ]

    await Ride.insertMany(rides)
    console.log('Rides created')
}

const fun = async () => {
    await main()
    db.close()
}

run()