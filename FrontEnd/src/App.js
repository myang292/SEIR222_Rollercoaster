import './styles/App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Parks from './pages/Parks';
import RidesTopSpeed from './pages/RidesTopSpeed'
import About from './pages/About'
// import parksArray from './temp_data/park'
import ParkForm from './components/ParkForm'
import RideDetails from './pages/RideDetails';
import ridesArray from './temp_data/ride'

const App = () => {
  console.log(`we're in the app`)
  
  const getParks = async() => {
    const parkList = await axios.get('http://localhost:3001/api/parks')
    console.log(parkList)
    setPark(parkList.data)
  }

  const getRides = async() => {
    const ridesList = await axios.get('http://localhost:3001/api/rides')
    console.log(ridesList)
    setRides(ridesList.data)
  }  

  const [rides, setRides] = useState([])
  const [parks, setPark] = useState([])
  const [newPark, setNewPark] = useState({
    id: '',
    description: '',
    location: '',
    address: '',
    url: '',
    img: '',
  })

  useEffect (() => {
    getParks()
    getRides()
  },[])

  const addPark = (e) => {
    e.preventDefault()
    const currentParks = parks
    const createdPark = {
      ...newPark,
      id: parseInt(parks.length + 1),
      price: parseInt(newPark.price)
    }
    currentParks.push(createdPark)
    setPark(currentParks)
    setNewPark({ id: '', name: '', location: '', description: '', rollercoaster: '' })
  }

  const handleChange = (e) => {
    setNewPark({ ...newPark, [e.target.name]: e.target.value })
  }

  if(rides && parks) {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks}/>} />
          <Route path='about' element={<About />} />
          <Route path='parks' element={<Parks parks={parks} />} />
          <Route path='/parks/:id' element={<RideDetails parks={parks} rides={rides}/> } />
          <Route path='new' element={ <ParkForm newPark={newPark} handleChange={handleChange} addPark={addPark}/>} />

          <Route path='rides/top3/speed' element={<RidesTopSpeed parks={parks} rides={rides} />} />

        </Routes>
      </main>
    </div>
  );
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

export default App;
