import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getListingById, updateListing } from '../../utilities/users-api';
import './EditListing.css'

function EditListing() {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [listing, setListing] = useState({});
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [images, setImages] = useState([]);
  const [availability, setAvailability] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        if (!token) {
          alert('Unauthorised user! Someone call 911!');
          return;
        }

        const response = await getListingById(id)

        const data = response[0];
        setListing(data);
        setTitle(data.title);
        setSize(data.size);
        setDescription(data.description);
        setPrice(data.price);
        setLocation(data.location);
        setBedrooms(data.bedrooms);
        setBathrooms(data.bathrooms);
        setImages(data.images);
        setAvailability(data.availability);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedListing = {
      title,
      size,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
      images,
      availability,
    };

    try {
      await updateListing(id, updatedListing)

      // Redirect back to the profile page
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Size:
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Bedrooms:
          <select
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
         <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          </select>
        </label>
        <label>
          Bathrooms:
          <select
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          >
        <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option> 
          </select>
        </label>
        {/* <label>
          Images:
          <input
            type="text"
            value={images.join(', ')}
            onChange={(e) => setImages(e.target.value.split(', '))}
          />
        </label> */}
        <label>
          Availability:
          <input
            type="checkbox"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditListing;