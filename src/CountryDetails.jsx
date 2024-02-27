import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";

function CountryDetails(){
    let cparams=useParams()
    let [countryDetails,setCountryDetails]=React.useState(null)
    // console.log(cparams)
    React.useEffect(()=>{
     axios.get(`https://restcountries.com/v3.1/name/${cparams.cname}?fullText=true`).then((res)=>{
        setCountryDetails(res.data[0])
        console.log(res.data)
     })
    },[cparams])
    return (
        <div className="border border-3 border-danger p-3">
            {
            CountryDetails && <div>
              <h1>{countryDetails.name.common}</h1>
              <h2>{countryDetails.capital[0]}</h2>
              <img src={countryDetails.flags.png}/>
            </div>

            }
            </div>
    )
}
export default CountryDetails