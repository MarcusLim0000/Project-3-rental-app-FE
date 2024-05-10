import "./DisplayListing.css";


function DisplayListing(props) {
const {property} = props


  return (
    <div className={`listing-item ${property.availability ? 'available' : 'rented'}`}>
    <p className="listing-title">{property.title}</p>
    <div className="image-container">
      {property.images.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))}
    </div>
    <p className="listing-description">"{property.description}"</p>
    <p className="listing-price">${property.price}/month</p>
    <p className="listing-features">
    <span>{property.bedrooms} 🛏️</span>
    <span>{property.bathrooms} 🛁</span>
    <span>&bull;</span> {/* Dot separator */}
    <span>{property.size} sqm</span>
  </p>
    <p className="listing-location">📍Location: {property.location}</p>

  </div>
);
}

export default DisplayListing;
