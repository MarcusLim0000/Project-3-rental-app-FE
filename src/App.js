import './App.css';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';
import Listing from './pages/Listing';


function App() {
  return (
    <div className="App">
      <AuthPage/>
      <hr />
      <Listing />
      <hr />
      <Profile/>
    </div>
  );
}

export default App;
