import "./Listing.css";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from "react";

function Listing() {
  const [property, setProperty] = useState([
    
  ]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("https://project-3-rental-app-be.onrender.com/api/listing/");
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1 className="listing-header">Listings</h1>
     <div className="listings-container">

    {property.map((property) => { 
      return(<div className="listing-description">
         <DisplayListing property={property}/>
         
      </div>)
   })}
   </div>
    </div>
  );
}

export default Listing;
