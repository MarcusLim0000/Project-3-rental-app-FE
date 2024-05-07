import "./DisplayListing.css";
import { useEffect, useState } from "react";

// code for function to retrieve all data from back end, will use Listing in pages to do the search and filtering
// component to display more details

// function DisplayListing(props) {
// console.log(props)
//the actual code should call and display property.name

function DisplayListing(props) {
const {property} = props

  return (
    <div className="listings-container">
    <div className="listing-item">
      <p className="listing-title">{property.title}</p>
      <p className="listing-description">Description: {property.description}</p>
      <p className="listing-price">Price: ${property.price}</p>
      <p className="listing-location">Location: {property.location}</p>
      {/* Assuming imageUrls is an array of image URLs for now */}
      {/* <div className="image-container">
      {listing.imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index}`} />
            ))}
          </div> */}
          </div>
        </div>
 
  );
}

export default DisplayListing;
