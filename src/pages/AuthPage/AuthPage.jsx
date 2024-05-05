import './AuthPage.css';
import { useState } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

function AuthPage({setUser}) {
  const [choice, setChoice] = useState(false);
  return (
    <main className="AuthPage">
    <div>
      {choice ? <SignIn setUser={setUser} /> : <SignUp setUser={setUser}/>}
      
      <button onClick={() => setChoice(!choice )}>
      {choice ? 'Sign Up Instead' : 'Sign In Instead'}
      </button>
      </div>
      </main>
  );
}

export default AuthPage;