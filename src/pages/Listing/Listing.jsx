import "./Listing.css";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from "react";
import { getAvailableListing, rentListing } from "../../utilities/users-api";

function Listing() {
  const [property, setProperty] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

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

  function handleSort() {
    const sortedProperty = [...property].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProperty(sortedProperty);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <div>
      <h1 className="listing-header">Listings</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" onClick={handleSort} />
          <span className="toggle-slider"></span>
        </label>
        <span>{sortOrder === "asc" ? "Most expensive" : "Cheapest"}</span>
      </div>

     <div className="listings-container">

    {property.map((property) => { 
      return(<div className="listing-item">
         <DisplayListing property={property}/>
         <button className="rent-button" onClick={()=>rentApartment(property._id)}>RENT</button>
      </div>)
   })}
   </div>
    </div>
  );
}

export default Listing;
