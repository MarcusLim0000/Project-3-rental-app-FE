import './SignOut.css';
import { logOut } from '../../utilities/users-service';

export default function SignOut({ user, setUser }) {
  function handleSignOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserSignOut">
      <button className="btn-sm" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
