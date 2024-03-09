import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../store/actions";
function Countries(props){
    console.log('props in countries::',props)
     //function for countries to print
  React.useEffect(()=>{
    props.dispatch(getCountries());
 },[])
    // console.log(props)
    return(
        <div className="betterview">
            <h1>COUNTRIES</h1>
            {
                props.countries.countries.map((country)=>{
               return (<li>{country.name}</li>)
                })
            }
        </div>
    )
}
export default connect(store=>store) (Countries)