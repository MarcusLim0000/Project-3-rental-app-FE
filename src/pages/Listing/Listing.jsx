import "./Listing.css";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from "react";

// To consider adding filtering/ search function within this page.

function Listing() {
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
      <br />
      This should include sort and filter methods
      <br />
      <DisplayListing />
      <button>Zoom in </button>
      <p>
        (^this button is supposed to call another component to show more details
        about the listing)
      </p>
    </div>
  );
}

export default Listing;
