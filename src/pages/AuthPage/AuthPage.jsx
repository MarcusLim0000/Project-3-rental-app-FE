import './AuthPage.css';
import { useState } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

function AuthPage({setUser}) {
  const [choice, setChoice] = useState(false);
  return (
    <div>
      AuthPage
      {choice ? <SignIn setUser={setUser} /> : <SignUp setUser={setUser}/>}
      <button onClick={() => setChoice(!choice )}>
      {choice ? 'Sign Up Instead' : 'Sign In Instead'}
      </button>
    </div>
  );
}

export default AuthPage;