import './CreateListing.css';
import {useState} from 'react'


function CreateListing() {
    const [newListing, setNewListing] = useState({
        title: '',
        size: '',
        description: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        //still no idea how to incorporate images into mongoDB
        images: [],
        
    })
    function handleChange(evt) {
        if(evt.target.name==='images'){
            setNewListing({...newListing, images: Array.from(evt.target.files)})
        } else {
        setNewListing({...newListing, [evt.target.name]:evt.target.value})
    }
}
async function handleSubmit(evt) {
    evt.preventDefault()
    //for now will only log the form
    console.log(newListing)
}
  return (
    <div>
      <h1>Create Listing</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='title' name='title' type='text' onChange={handleChange}></input>
        <br/>
        <input placeholder='size' name='size' type='number' onChange={handleChange}></input>
        <br/>
        <input placeholder='description' name='description' type='text' onChange={handleChange}></input>
        <br/>
        <input placeholder='rental per month' name='price' type='number' onChange={handleChange}></input>
        <br/>
        <input placeholder='location' name='location' type='String' onChange={handleChange}></input>
        <br/>
        <label>Bedrooms: </label>
        <select name="bedrooms" onChange={handleChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <label>Bathrooms: </label>
        <select name="bathrooms" onChange={handleChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <br/>
        <div> {/* this div is for images */}
        <span>Images: </span>
        <br/>
        <input type='file' name='images' accept='image/*' multiple onChange={handleChange}/>
        <button>Upload</button>{/* kns the tutorial use firebase to store the images...*/}
        </div>
        <button type='submit'>Create Listing</button>
      </form>
    </div>
  )
}

export default CreateListing