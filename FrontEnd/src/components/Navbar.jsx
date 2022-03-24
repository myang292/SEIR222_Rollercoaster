import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()

  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="listings">Listings</Link>
        <Link to="new">Add Boat</Link>
        <div class="back" onClick={()=>{navigate(-1)}}>BACK</div>
      </div>
    </nav>
  )
}

export default Navbar