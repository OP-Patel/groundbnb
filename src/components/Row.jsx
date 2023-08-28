import React from "react";
import Box from "./Box";

import houses from "../houses";

function createBox(house){
    return(
        <Box 
            location = {house.houseLocation}
            imageURL = {house.imageURL}
            rating = {house.rating}
            time = {house.rentTime}
            bath = {house.description.bath}
            bedrooms = {house.description.bedrooms}
            guests = {house.description.guests}
            cost = {house.cost}
        />
    )
}

function Row(){
    return(
        <div>
            <div class="box-wrapper">
                {houses.slice(0,6).map(createBox)}
            </div>           
        </div>
    )
}

export default Row;