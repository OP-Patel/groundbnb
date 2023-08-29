import React from "react";

function Navicons(props){
    return(
        <div class="iconHouse">  
            <img src={props.iconURL} alt="camping-tent"/>
            <p class="iconText">{props.text}</p>
        </div>
    )
}


export default Navicons;