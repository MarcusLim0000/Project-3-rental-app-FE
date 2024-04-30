import './DisplayListing.css'

function DisplayListing(props) {
console.log(props)
//the actual code should call and display property.name
    return(
        <div>
            <h1>{props.property.objId}</h1>
            DisplayListing - fetch methods to pull data from database on listing details
        </div>
    )
}

export default DisplayListing