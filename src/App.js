import "./App.css";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import Profile from "./pages/Profile/Profile";
import Listing from "./pages/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";
import CreateListing from "./pages/CreateListing/CreateListing";
import { getUser } from "./utilities/users-service";
import AboutUs from "./pages/AboutUs/AboutUs";
import EditListing from "./pages/EditListing/EditListing";

function App() {
  const [user, setUser] = useState(getUser());


  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Rent Haven</title>
                <link rel="canonical" href="https://project-3-rental-app-fe.vercel.app/" />
                <meta name="description" content="Rental web application" />
            </Helmet>
      {user ? (
        <Router>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/edit-listing/:id" element={<EditListing/>}/>
            <Route path="/" element={<Listing />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/*" element={<AuthPage setUser={setUser} />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
