import React from "react";


function Box(props){
    return(
        <div class="house-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="heartIcon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            <img class="house-image" alt="a house" src={props.imageURL}></img>
            <div class="col1-wrapper">
                <p class="location">{props.location}</p>
                <p class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" class="starIcon" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                {props.rating}</p>
            </div>
            <div class="date-wrapper">
                <p class="date">{props.time}</p>
            </div>
            <div class="description-wrapper">
                <p class="description">{props.bath} <img class="bath" width="12" height="12" src="https://img.icons8.com/pastel-glyph/15/bath--v2.png" alt="bath--v2"/></p>
                <p class="description">{props.bedrooms} <img width="16" height="16" src="https://img.icons8.com/ios/16/occupied-bed.png" alt="occupied-bed"/></p>
                <p class="description">{props.guests} <img width="17" height="17" src="https://img.icons8.com/pastel-glyph/15/person-male--v2.png" alt="person-male--v2"/></p>
            </div> 
            <div class="cost-wrapper">
                <p class="cost">${props.cost} CAD <span class="perNightText">night</span></p>

            </div>
        </div>
    )
}

export default Box;  