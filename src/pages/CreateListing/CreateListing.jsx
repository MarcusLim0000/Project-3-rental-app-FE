import "./CreateListing.css";
import { useState } from "react";
import { createListing, imageUpload } from "../../utilities/users-api";

function CreateListing() {
  const [newListing, setNewListing] = useState({
    title: "",
    size: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
  });
  function handleChange(evt) {
    if (evt.target.name === "images") {
      setNewListing({ ...newListing, images: Array.from(evt.target.files) });
    } else {
      setNewListing({ ...newListing, [evt.target.name]: evt.target.value });
    }
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      createListing(newListing);
      alert('Listing created!')
      setNewListing({
        title: "",
        size: "",
        description: "",
        price: "",
        location: "",
        bedrooms: "",
        bathrooms: "",
        images: [],
      })
      setFile(null); 
      document.getElementById('fileInput').value = '';

    } catch (error) {
      console.log(error);
    }
  }

  const [file, setFile] = useState();

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await imageUpload(formData);
      const imageUrl = response.data;
      setNewListing({
        ...newListing,
        images: [...newListing.images, imageUrl],
      });
      alert("Image attached. Please submit your form!");
    } catch (error) {
      console.error("Image uploading failed. Better luck next time!", error);
    }
  }

  return (
    <div className="create-listing-container">
    <h1>Create Listing</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          placeholder="Title"
          name="title"
          type="text"
          value={newListing.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Size (sqm):
        <input
          placeholder="Size"
          name="size"
          type="number"
          value={newListing.size}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          placeholder="Description"
          name="description"
          type="text"
          value={newListing.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Rental (USD):
        <input
          placeholder="Price"
          name="price"
          type="number"
          value={newListing.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          placeholder="Location"
          name="location"
          type="text"
          value={newListing.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Bedrooms:
        <select
          name="bedrooms"
          value={newListing.bedrooms}
          onChange={handleChange}
        >
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <label>
        Bathrooms:
        <select
          name="bathrooms"
          value={newListing.bathrooms}
          onChange={handleChange}
        >
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <div>
        <label htmlFor="fileInput">Images:</label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
      {newListing.images.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          <ul>
            {newListing.images.map((image, index) => (
              <li className="uploaded-image" key={index}>{image}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default CreateListing;