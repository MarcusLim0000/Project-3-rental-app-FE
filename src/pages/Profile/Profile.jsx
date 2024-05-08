import './Profile.css';
import { Link } from "react-router-dom";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from 'react';
import { deleteListing } from '../../utilities/users-api';

function Profile(props) {
    const { user } = props;

    const [userProperty, setUserProperty] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchUserProperties = async () => {
            try {
               
                if (!token) {
                    alert('Unauthorised user! Someone call 911!');
                    return;
                }

                const userId = user._id; 

                const response = await fetch(`https://project-3-rental-app-be.onrender.com/api/listing/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch listings");
                }

                const data = await response.json();
                setUserProperty(data);
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        };

        fetchUserProperties();
    }, [user]);
    async function handleDelete(id) {
        try {
          await deleteListing(id);
          const fetchUserProperties = async () => {
            try {
              if (!token) {
                alert('Unauthorised user! Someone call 911!');
                return;
              }
      
              const userId = user._id; 
      
              const response = await fetch(`https://project-3-rental-app-be.onrender.com/api/listing/${userId}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
      
              if (!response.ok) {
                throw new Error("Failed to fetch listings");
              }
      
              const data = await response.json();
              setUserProperty(data);
            } catch (error) {
              console.error("Error fetching listings:", error);
            }
          };
          fetchUserProperties();
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div>
            <h1 className ="user-title">Welcome, {user.name}</h1>
            <Link to="/create-listing" className="link-button">CREATE NEW LISTING</Link>
            <br />
            <div className="listings-container">
            {userProperty.map((property) => (
                <div key={property.objId}>
                    <DisplayListing property={property} />
                    <button onClick={()=>{
                        handleDelete(property._id)
                        }}>Delete</button>
                </div>
            ))}
            <br />
            
        </div>
        </div>
    );
}

export default Profile;
