import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import Profile from './pages/Profile/Profile';
import Listing from './pages/Listing/Listing';
import Navbar from './components/Navbar/Navbar';
import CreateListing from './pages/CreateListing/CreateListing';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());
  // test the code by changing the useState
  //the useState should be a function getUser()

  // function getUser() {
  //   get token from getToken()
  //   return user from token
  // }



  return (
    <div className="App">
      {user ? (
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/profile' element={<Profile user={user}/>} />
            <Route path='/create-listing' element={<CreateListing/>}/>
            <Route path='/' element={<Listing/>} /> 
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path='/*' element={<AuthPage setUser={setUser}/>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;