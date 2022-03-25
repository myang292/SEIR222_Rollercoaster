import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import ParkCard from '../components/ParkCard'


const Home = (props) => {

  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const searchOnChange = (e) => {
    const value = e.target.value
    console.log(value)
    setSearchQuery(value)
  }

  const searchOnSubmit = function (e) {
    const parks = props.parks
    let results = parks.filter((park) => {
      return park.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    console.log(results)

    setSearchResults(results)
  }

  let navigate = useNavigate()

  const showParks = (parks) => {
    navigate(`parks/${parks._id}`)
  }

  return (
    <div className="home">
      <h1>Theme Parks! 🎢 </h1>
      <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
      <div className="search">
        <h3>Showing Results for: {searchQuery}</h3>
        <section className="search-results container-grid">
          {searchResults.map((result) => {
            return <ParkCard key={result._id} onClick={() => showParks(result)} image={result.img} name={result.name} />

          })}
        </section>
      </div>
      </div>
  )
}

export default Home
