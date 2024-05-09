import SignOut from '../SignOut/SignOut';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from "../../assets/rental-app-logo tpn.png";

function Navbar({user, setUser}) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Rent Haven Logo" className="logo-image" /></div>
          <h1 className="navbar-title">Rent Haven</h1>
        
      </div>
      <div className="navbar-right">
        <div className="navbar-item">
          <Link to='/about-us'>About us</Link>
        </div>
        <div className="navbar-item">
          <Link to='/'>Listings</Link>
        </div>
        <div className="navbar-item">
          <Link to='/profile'>My Account</Link>
        </div>
        <div className="navbar-item">
          <SignOut user={user} setUser={setUser} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar