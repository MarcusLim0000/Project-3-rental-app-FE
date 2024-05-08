import "./Listing.css";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from "react";
import { getAvailableListing, rentListing } from "../../utilities/users-api";

function Listing() {
  const [property, setProperty] = useState([
    
  ]);
  const fetchListings = async () => {
    try {
      const data = await getAvailableListing()
      setProperty(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };
  useEffect(() => {
    fetchListings();
  }, []);

  async function rentApartment(id) {
    try {
      const rent = {availability: false}
      await rentListing(id,rent)
      fetchListings()
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="listing-header">Listings</h1>
     <div className="listings-container">

    {property.map((property) => { 
      return(<div className="listing-description">
         <DisplayListing property={property}/>
         <button onClick={()=>rentApartment(property._id)}>RENT</button>
      </div>)
   })}
   </div>
    </div>
  );
}

export default Listing;
