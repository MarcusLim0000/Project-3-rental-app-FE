import SignOut from '../SignOut/SignOut';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar({user, setUser}) {
    return(
        <nav className="navbar">
        <div className="navbar-item">
          <Link to='/'>Listings</Link>
        </div>
        <div className="navbar-item">
          <Link to='/profile'>My Account</Link>
        </div>
        <div className="navbar-item">
          <SignOut user={user} setUser={setUser} />
        </div>
      </nav>
    );
  }
export default Navbar