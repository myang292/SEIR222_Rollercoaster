import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()

  return (
    <nav className="navbar">
      <h4>The Coaster</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="Parks">Parks</Link>
        <Link to="About">Who are we</Link>
       
      </div>
    </nav>
  )
}

export default Navbar