import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage.jsx';
import Photos from './components/Photos.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  const [ name, setName ] = useState(null)

  return(
  <>
  <Header name={name} />
  <Routes>
    <Route path="/" element = {<Homepage name={name} setName={setName} />} />
    {/* <Route path="/:presentation/" element = {<Homepage name={name} setName={setName} />} /> */}
    <Route path="/photos" element = {<Photos name={name} />} />
    <Route path="/booking" element = {<Booking name={name}/>} />
  </Routes>
  <Footer name={name} />
  </>
  )
}

export default App
