import React, {useEffect, useState} from 'react'
import {Routes, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'


const RideDetails = (props) => {
    
    let {id} = useParams()

    const [selectedPark, setPark] = useState('')

    useEffect(() => {
        let selectedPark = props.parks.find(
        (park) => park._id === (id)
        )
        setPark(selectedPark)
    
    }, [props.parks, id])

    const [selectedRides, setRide] = useState('')

    useEffect(() => {
        let selectedRides = props.rides.filter(
        (ride) => ride.park === (id)
        )
        setRide(selectedRides)
    }, [props.parks, id])
  
    console.log(selectedRides)
    
    if (selectedPark) {

    return (
      <div className="park-details" >
        <h1> {selectedPark.name} </h1> 
        <img src={selectedPark.img} alt='poster'/>
        <h3>Located in {selectedPark.location} at the address of {selectedPark.address}.</h3>
        <p> Description: {selectedPark.description}</p>
        <a href={selectedPark.url} target='_blank'>{selectedPark.url}</a>
        <div className='ride-details'>
            <h2>Ride Name and Details:</h2>
            {selectedRides.map((ride) => (
                <div key={ride._id}>
                    <ol>
                        <h3>{ride.name}</h3>
                        <p>{ride.description}</p>
                        <ul>
                            <li>Ride Height: {ride.height}</li>
                            <li>Ride Length: {ride.length}</li>
                            <li>Top Speed: {ride.speed}</li>
                            <li>Steel/Wood: {ride.type}</li>
                        </ul>
                    </ol>
                </div>
            ))}
        </div>
        
      </div>
    )
  }
  else {
      return (
      <div className='loading-content-wrapper'>
          Loading...
      </div>
      )
  }}
  export default RideDetails