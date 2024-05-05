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
        const response = await fetch("http://localhost:3005/api/listing/get");
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
      <h1>Listings</h1>
      <br />
      This should include sort and filter methods
      <br />

    {property.map((property) => { 
      return(<div>
         <DisplayListing property={property}/>
         <button>Zoom In</button>
      </div>)
   })}
    </div>
  );
}

export default Listing;
