import './styles/App.css';
import React, {useState} from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Parks from './pages/Parks';
import About from './pages/About'
import Search from './components/Search'
 
 
 
 
 
function App() {
 return (
   <div className="App">
     {/* <Navbar /> */}
     {/* <Search /> */}
     <main>   
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/parks" element={<Parks />} />
       <Route path="/about" element={<About />} />
     </Routes> 
     </main>
   </div>
 );
}
 
export default App;
 
