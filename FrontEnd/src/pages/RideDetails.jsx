import React from 'react'
import {Routes, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const RideDetails = (props) => {
    let navigate = useNavigate()
  
    const showRides = (rides) => {
      navigate(`${rides.id}`)
    }
  
    return (
      <div className="parks-grid">
        {
        props.rides.map((ride) => (
          <div className="park-card" onClick={() => showRides(ride)} key={ride.id}>
            <img style={{ display: 'block' }} src={ride.img} alt={ride.name} />
            <h3>{ride.name}</h3>
          </div>
        ))} 

        <h1> This is the Ride Details</h1>
      </div>
      
    )
  }
  
  export default RideDetails