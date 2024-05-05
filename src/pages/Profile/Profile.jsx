import './Profile.css';
import { Link } from "react-router-dom"
import DisplayListing from "../../components/DisplayListing/DisplayListing"
import { useEffect, useState } from 'react';

function Profile(props) {
const {user} = props
console.log(user) // test if i can retrieve user from App.js 

const [userProperty, setUserProperty] = useState([
    {
        objId: 'obj1',
        name: 'testCondo',
        title: 'for Rent',
        description: 'cheap condo',
        price: 1,
        location: 'tanjong pagar',
    },
    {objId:'obj2',
    name: 'testLanded',
        title: 'for BnB',
        description: 'luxury landed',
        price: 1000,
        location: 'sentosa cove',
    }]

) //just an example
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
            <h1> welcome {user.name}</h1>
            {userProperty.map((property)=>{
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