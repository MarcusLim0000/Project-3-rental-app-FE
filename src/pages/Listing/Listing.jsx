import './Listing.css';
import DisplayListing from '../../components/DisplayListing/DisplayListing'
import { useEffect, useState } from 'react';

function Listing() {
//note that we should query for objId, and use name property here.
    const [listings,setListings] = useState([
{
    objId: 'testCondo',
    status: 'available',
},
{
    objId: 'testHDB',
    status: 'available',
},
{
    objId: 'testLanded',
    status: 'available'
}

    ])

    useEffect(()=>{
        //function to search the database for available listings
        //call setLisings()
        },[])
    return (
      <div>
        This is to show other people's listings
        <br />
        This should include sort and filter methods
        <br />
        {listings.map((property) => {
          return (
            <div>
              <DisplayListing property={property} />
              <button>Zoom in </button>
              <p>(^this button is supposed to call another component to show more details about the listing)</p>
            </div>
          );
        })}
      </div>
    );
}

export default Listing