import SignOut from '../SignOut/SignOut';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar({user, setUser}) {
    return(
        <nav style={{display:'inline-flex', position:'fixed', top:'0', right:'0'}}>
        <div style={{margin:'20px'}}><Link to='/'>Listings</Link></div>
        <div style={{margin:'20px'}}><Link to='/profile'>My Account</Link></div>
        <SignOut user={user} setUser={setUser}/>
        {/* <div style={{margin:'20px'}}><Link to='/sign-out'>Sign Out</Link></div> */}
        {/* sign out should do something to 'setUser' to null */}
        </nav>
    )
}

export default Navbar