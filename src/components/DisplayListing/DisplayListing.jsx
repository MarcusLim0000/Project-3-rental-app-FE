import "./DisplayListing.css";
import { useEffect, useState } from "react";

// code for function to retrieve all data from back end, will use Listing in pages to do the search and filtering
// component to display more details

// function DisplayListing(props) {
// console.log(props)
//the actual code should call and display property.name

function DisplayListing() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/listing/get");
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      {listings.map((listing) => (
        <div key={listing._id} className="listing-item">
          <h2>{listing.title}</h2>
          <p>Description: {listing.description}</p>
          <p>Price: ${listing.price}</p>
          <p>Location: {listing.location}</p>
          {/* Assuming imageUrls is an array of image URLs for now */}
          <div className="image-container">
            {listing.imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayListing;
