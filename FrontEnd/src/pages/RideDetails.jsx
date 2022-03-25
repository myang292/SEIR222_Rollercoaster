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
        <h3>{selectedPark.location}: {selectedPark.address}</h3>
        <p> Description: {selectedPark.description}</p>
        <a href={selectedPark.url} target='_blank'>{selectedPark.url}</a>
        
        
        {selectedRides.map((ride) => (
            <div key={ride._id}>
                <h3>{ride.name}</h3>
            </div>

        ))}
        
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