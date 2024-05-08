import "./DisplayListing.css";


function DisplayListing(props) {
const {property} = props


  return (
    <div className="listings-container">
    <div className="listing-item">
      <p className="listing-title">{property.title}</p>
      <div className="image-container">
      {property.images.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index}`} />
            ))}
          </div>
      <p className="listing-description">Description: {property.description}</p>
      <p className="listing-price">Price: ${property.price}</p>
      <p className="listing-location">Location: {property.location}</p>      
          </div>
        </div>
 
  );
}

export default DisplayListing;
