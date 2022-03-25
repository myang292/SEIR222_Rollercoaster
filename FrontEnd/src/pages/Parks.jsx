import React from 'react'
import {Routes, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const Parks = (props) => {
    let navigate = useNavigate()
  
    const showParks = (parks) => {
      navigate(`${parks._id}`)
    }
  console.log(props.parks)
    return (
      <div className="parks-grid">
        {
        props.parks.map((park) => (
          <div className="park-card" onClick={() => showParks(park)} key={park._id}>
            <h3>{park.name}</h3>
            <img style={{ display: 'block' }} src={park.img} alt={park.name} />
            
          </div>
        ))} 
      </div>
      
    )
  }
  
  export default Parks