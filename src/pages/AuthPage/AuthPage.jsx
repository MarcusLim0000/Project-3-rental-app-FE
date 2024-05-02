import './AuthPage.css';
import { useState } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

function AuthPage(props) {
  const [choice, setChoice] = useState(false);
  const {getUser} = props
  return (
    <div>
      AuthPage
      {choice ? <SignIn getUser={getUser} /> : <SignUp getUser={getUser}/>}
      <button onClick={() => setChoice(!choice )}>
      {choice ? 'Sign Up Instead' : 'Sign In Instead'}
      </button>
    </div>
  );
}

export default AuthPage;