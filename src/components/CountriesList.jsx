import countries from '../countries.json';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function CountriesList() {
    const [countryList, setCountryList] = useState(countries)

    useEffect(()=>{


    })

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
