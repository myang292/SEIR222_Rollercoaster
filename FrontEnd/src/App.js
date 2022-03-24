import './styles/App.css';
import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Parks from './pages/Parks';
import About from './pages/About'
import parksArray from '../temp_data/park'

const App = () => {
  console.log(`we're in the app`)
  
  const [parks, setPark] = useState(parksArray)
  const [newPark, setNewPark] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    price: ''
  })

  const addPark = (e) => {
    e.preventDefault()
    const currentBoats = parks
    const createdBoat = {
      ...newPark,
      id: parseInt(parks.length + 1),
      price: parseInt(newPark.price)
    }
    currentBoats.push(createdBoat)
    setPark(currentBoats)
    setNewPark({ id: '', name: '', img: '', description: '', price: '' })
  }

  const handleChange = (e) => {
    setNewPark({ ...newPark, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='parks' element={<Parks />} />
          <Route path='new' element={ <ParkForm newPark={newPark} handleChange={handleChange} addPark={addPark}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
