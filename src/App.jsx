import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { AppContext } from './components/AppContext';
import Homepage from './components/Homepage.jsx';
import Photos from './components/Photos.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ShowDetails from './components/ShowDetails.jsx';
import styleName from './components/functions/styleName.jsx';

const Wrapper = ({ component: Component, ...rest }) => {
  const params = useParams();
  const { name, setName: updateName, initialRender, setInitialRender } = useContext(AppContext);

  useEffect(() => {
    if (params.name && name !== params.name) {
      updateName(params.name);
    }
  }, [params.name, name, updateName]);

  return (
    <>
      <Header params={params} initialRender={initialRender} />
      <Component {...rest} params={params} />
    </>
  );
};

function App() {
  const { name, setName: updateName } = useContext(AppContext);

  styleName(name);

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
