import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
import Photos from './components/Photos.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ShowDetails from './components/ShowDetails.jsx';

const Wrapper = ({ component: Component, ...rest }) => {
  const params = useParams();
  const [ initialRender, SetInitialRender ] = useState(true);
  return (
    <>
      <Header params={params} initialRender={initialRender}  />
      <Component {...rest} params={params} />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper component={Homepage} />} />
        <Route path="/:name" element={<Wrapper component={Homepage} />} />
        <Route path="/:name/:showId" element={<Wrapper component={ShowDetails} />} />
        <Route path="/:name/photos" element={<Wrapper component={Photos} />} />
        <Route path="/:name/booking" element={<Wrapper component={Booking} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
