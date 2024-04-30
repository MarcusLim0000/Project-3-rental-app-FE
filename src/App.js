import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import Profile from './pages/Profile/Profile';
import Listing from './pages/Listing/Listing';
import Navbar from './components/Navbar/Navbar';
import CreateListing from './pages/CreateListing/CreateListing';

function App() {
  const [user, setUser] = useState(1);
  // test the code by changing the useState

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
            <Route path='/*' element={<AuthPage/>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;