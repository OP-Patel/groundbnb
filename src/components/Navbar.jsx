import React from "react";
import Navicons from "./Navicons";

import icons from "../icons"; 


function createNavicons(icon){

    return(
        <Navicons 
            iconURL = {icon.cdnLink}
            text = {icon.text}
        />
    )
}

function Navbar(){
    return(
        <div class="navbarWrapper">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/left-squared--v1.png" alt="left-squared--v1"/>   
            {icons.map(createNavicons)}
            <img width="30" height="30" src="https://img.icons8.com/ios/50/right-squared--v1.png" alt="right-squared--v1"/>
        </div>
    )
}

export default Navbar;
