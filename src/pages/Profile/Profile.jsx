import './Profile.css';
import { Link } from "react-router-dom"
import DisplayListing from "../../components/DisplayListing/DisplayListing"
import { useEffect, useState } from 'react';

function Profile(props) {
const {user} = props
console.log(user) // test if i can retrieve user from App.js 

const [userInfo, setUserInfo] = useState({
    name: 'testUser',
    email: 'test@email.com',
    password: 123,
    listedProperty: [{objId:'obj1'},{objId:'obj2'}]
}) //just an example
//upon getting the objId, query the database to search for the listing objects

//const userArray?

try {

}
catch {

}

useEffect(()=>{

},[])

    return(
        <div>
            <h1> welcome {user}</h1>
            {userInfo.listedProperty.map((property)=>{
                return (<div>
                <DisplayListing property={property}/>
                <button>Edit</button>
                <button>Delete</button>
                </div>
                )
                })}
                <br/>
            <Link to={'/create-listing'}>CREATE NEW LISTING</Link>
        </div>
    )
}

export default Profile