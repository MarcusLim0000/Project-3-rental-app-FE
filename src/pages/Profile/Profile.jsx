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
                    // Handle unauthenticated state (redirect to login, show error message, etc.)
                    return;
                }

                const userId = user._id; 

                const response = await fetch(`http://localhost:3005/api/listing/${userId}`, {
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
    }, [user]); // Include user in the dependency array to re-fetch properties when user changes
    async function handleDelete(id) {
        try {
          await deleteListing(id);
          const fetchUserProperties = async () => {
            try {
              if (!token) {
                // Handle unauthenticated state (redirect to login, show error message, etc.)
                return;
              }
      
              const userId = user._id; 
      
              const response = await fetch(`http://localhost:3005/api/listing/${userId}`, {
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
            <h1>Welcome {user.name}</h1>
            {userProperty.map((property) => (
                <div key={property.objId}>
                    <DisplayListing property={property} />
                    <button onClick={()=>{
                        handleDelete(property._id)
                        }}>Delete</button>
                </div>
            ))}
            <br />
            <Link to="/create-listing">CREATE NEW LISTING</Link>
        </div>
    );
}

export default Profile;
