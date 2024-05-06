import './Profile.css';
import { Link } from "react-router-dom";
import DisplayListing from "../../components/DisplayListing/DisplayListing";
import { useEffect, useState } from 'react';

function Profile(props) {
    const { user } = props;
    console.log(user); // test if I can retrieve user from App.js 

    const [userProperty, setUserProperty] = useState([]);

    useEffect(() => {
        const fetchUserProperties = async () => {
            try {
                const token = localStorage.getItem('token');
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


    return (
        <div>
            <h1>Welcome {user.name}</h1>
            {userProperty.map((property) => (
                <div key={property.objId}>
                    <DisplayListing property={property} />
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            ))}
            <br />
            <Link to="/create-listing">CREATE NEW LISTING</Link>
        </div>
    );
}

export default Profile;
