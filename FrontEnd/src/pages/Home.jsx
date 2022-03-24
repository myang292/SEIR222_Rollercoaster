import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import ParkCard from '../components/ParkCard'
import parksArray from '../temp_data/park'

const Home = () => {

  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // useEffect (() => {

  // },[])

  const searchOnChange = (e) => {
    const value = e.target.value
    console.log(value)
    setSearchQuery(value)
  }

  const searchOnSubmit = async function (e) {
    e.preventDefault()
    const res = await axios.get('AXIOS CALL HERE')
    setSearchResults(res.data.results)
  }

  const cardOnClick = () => {

  }






  return (
    <div className="home">
      <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searchResults.map((result) => {
            return <ParkCard key={result.id} onClick={cardOnClick} image={result.background_image} name={result.name} />

          })}
        </section>
      </div>
      </div>
  )
}

export default Home
