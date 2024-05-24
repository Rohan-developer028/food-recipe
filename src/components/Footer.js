import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div>
        <hr />
        <h3> Devloped by Rohan </h3>
        <div >
            <h2>Contact</h2>
            <div style={{ paddingBottom:"20px",display: 'flex', textDecorationLine: 'none' ,color:"balck"}}>
                    <Link  style={{textDecorationLine:'none',color:"black"}}to="mailto:rg3434370@gmail.com"><h1>EMAIL ‎ ‎  ‎ ‎ ‎ </h1></Link> 
                    <Link style={{textDecorationLine:'none',textDecorationColor:"black",color:'black'}} to="https://github.com/Rohan-developer028?tab=repositories"><h1>GITHUB</h1></Link>
                </div>
            
        </div>
        </div>
    )
}