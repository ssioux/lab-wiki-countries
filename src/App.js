import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div id="main-container">
      <CountriesList />
        <Routes>
          <Route path="/country/:alphacode" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
