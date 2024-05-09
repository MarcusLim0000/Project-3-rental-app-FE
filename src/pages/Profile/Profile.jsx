import './Profile.css';
import { Link } from "react-router-dom";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from 'react';
import { deleteListing, getUserListing } from '../../utilities/users-api';

function Profile(props) {
    const { user } = props;

    const [userProperty, setUserProperty] = useState([]);
    const token = localStorage.getItem('token');
    const fetchUserProperties = async () => {
        try {
           
            if (!token) {
                alert('Unauthorised user! Someone call 911!');
                return;
            }
            const userId = user._id; 
            const data = await getUserListing(userId)    
            setUserProperty(data);
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };
    useEffect(() => {
        fetchUserProperties();
    }, [user]);
    async function handleDelete(id) {
        try {
          await deleteListing(id);
          fetchUserProperties();
        } catch (error) {
          console.log(error);
        }
      }


    return (
        <div>
            <h1 className ="user-title">Welcome, {user.name}</h1>
            <Link to="/create-listing" className="link-button">+ Create New Listing</Link>
            <br />
            <div className="listings-container">
            {userProperty.map((property) => (
                <div className="listing-item">
                    <DisplayListing property={property} />
                    <button onClick={()=>{
                        handleDelete(property._id)
                        }}>Delete</button>
                    <Link to={`/edit-listing/${property._id}`}><button>Edit</button></Link>
                </div>
            ))}
            <br />
            
        </div>
        </div>
    );
}

export default Profile;
