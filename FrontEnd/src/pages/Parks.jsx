import React from 'react'
import {Routes, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const Parks = (props) => {
    let navigate = useNavigate()
  
    const showParks = (parks) => {
      navigate(`${parks.id}`)
    }
  
    return (
      <div className="parks-grid">
        {
        props.parks.map((park) => (
          <div className="boat-card" onClick={() => showParks(park)} key={park.id}>
            <img style={{ display: 'block' }} src={park.img} alt={park.name} />
            <h3>{park.name}</h3>
          </div>
        ))}
      </div>
      
    )
  }
  
  export default Parks