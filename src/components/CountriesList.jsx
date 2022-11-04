import countries from '../countries.json';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import axios from "axios"

// with Api
function CountriesList() {
  
    const [countryList, setCountryList] = useState(null)
    const [isAxioning, setIsAxioning] = useState(true)


  useEffect(() => {
     setIsAxioning(true)
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response)=> {
      console.log(response)
      setCountryList(response.data)
      setIsAxioning(false)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  
  if(isAxioning === true){
    return <h3>... buscando</h3>
  }
    
    

  return (
    
    <div>
      <h3>CountriesList</h3>
      {countryList.map((eachCountry) => {
        return (
        <p key={eachCountry.name.official}>
            <Link to={`/country/${eachCountry.alpha3Code}`}>{eachCountry.name.official}</Link>
        </p>
        )
      })}
    </div>
  );
}

export default CountriesList;
