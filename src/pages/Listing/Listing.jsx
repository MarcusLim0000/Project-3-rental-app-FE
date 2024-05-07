import "./Listing.css";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from "react";

// To consider adding filtering/ search function within this page.

function Listing() {
  const [property, setProperty] = useState([
    
  ]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/listing/");
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data = await response.json();
        setProperty(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="listing-container">
      <h1 className="listing-header">Listings</h1>
     
      <br />

    {property.map((property) => { 
      return(<div className="listing-description">
         <DisplayListing property={property}/>
         
      </div>)
   })}
    </div>
  );
}

export default Listing;
