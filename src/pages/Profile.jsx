import { Link } from "react-router-dom"
import DisplayListing from "../components/DisplayListing"

function Profile() {
    return(
        <div>
            <DisplayListing/> or CRUD to add new listings
            <br/>
            should also include a cart option to show what i wanna buy/rent
            <br/>
            <Link to={'/create-listing'}>CREATE NEW LISTING</Link>
        </div>
    )
}

export default Profile