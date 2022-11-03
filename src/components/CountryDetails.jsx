// import { Link, Router, Route } from 'react-router-dom';
import {useParams} from "react-router-dom"
import countries from "../countries.json"
function CountryDetails() {

    const paramInfo = useParams()
    console.log(paramInfo.alphacode)

    const oneCountry = countries.filter((eachCountry)=> {
      return eachCountry.alpha3Code === paramInfo.alphacode
    })
    console.log(oneCountry[0])
    // const oneCountry = countries.includes(paramInfo.alphacode)
    // console.log(oneCountry)
    

  return (
    <div>
        <h3>{oneCountry[0].name.common}</h3>

        <p>Capital: {oneCountry[0].capital}</p>
        <p>Area:{oneCountry[0].area}</p>
        <p>Borders:</p>
        <ul> 
        {oneCountry[0].borders.map((eachBorder, index)=> {
          return (
            <li key={index}>{eachBorder}</li> 
          )
        })}
        </ul>
        {/* <p>{oneCountry[0].borders}</p> */}
    

    </div>
  )
}

export default CountryDetails