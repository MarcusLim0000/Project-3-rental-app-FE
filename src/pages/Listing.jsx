import DisplayListing from "../components/DisplayListing"

function Listing() {
    return(
        <div style={{border: '1px solid black', borderRadius: '10%'}}>
            <DisplayListing/>
            This is to show other people's listings
        </div>
    )
}

export default Listing