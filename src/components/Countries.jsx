import React from "react";
import { connect } from "react-redux";
function Countries(props){
    console.log('props in countries::',props)
     //function for countries to print
  React.useEffect(()=>{
     getCountries();
 },[])
    // console.log(props)
    return(
        <div className="betterview">
            <h1>COUNTRIES</h1>
        </div>
    )
}
export default connect(store=>store) (Countries)