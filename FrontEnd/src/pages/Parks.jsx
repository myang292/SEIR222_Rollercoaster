import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Parks = (props) => {
    let navigate = useNavigate()

    const showPark = (park) => {
      navigate(`${park.id}`)
    }
  
    return (
      <div className="park-grid">
        {
        props.boats.map((park) => (
          <div className="park-card" onClick={() => showPark(park)} key={park.id}>
            <img style={{ display: 'block' }} src={park.img} alt={park.name} />
            <h3>{park.name}</h3>
          </div>
        ))}
        <Link to='/'>Home</Link>
      </div>
      
    )
}

export default Parks