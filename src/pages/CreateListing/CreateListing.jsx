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
          placeholder="title"
          name="title"
          type="text"
          value={newListing.title}
          onChange={handleChange}
        ></input>
        </label>
        <label>
          Size:
        <input
          placeholder="size in sqm"
          name="size"
          type="number"
          value={newListing.size}
          onChange={handleChange}
        ></input>
        </label>
        <label>
          Description:
        <input
          placeholder="description"
          name="description"
          type="text"
          value={newListing.description}
          onChange={handleChange}
        ></input>
        </label>
        <label>
          Rental:
        <input
          placeholder="rental per month in USD"
          name="price"
          type="number"
          value={newListing.price}
          onChange={handleChange}
        ></input>
        </label>
        <label>
          Location:
        <input
          placeholder="location"
          name="location"
          type="String"
          value={newListing.location}
          onChange={handleChange}
        ></input>
        </label>
        <br/>
        <label>
          Bedrooms: 
        <select name="bedrooms" onChange={handleChange} value={newListing.bedrooms}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        </label>
        <label>Bathrooms: 
        <select name="bathrooms" onChange={handleChange} value={newListing.bathrooms}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        </label>
        <div>
          {" "}
          <span>Images: </span>
          <br />
          <input
            type="file"
            id='fileInput'
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
          <button key="upload" type="button" onClick={handleUpload}>
            Upload
          </button>
          <button key="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateListing;
