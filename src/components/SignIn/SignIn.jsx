import "./SignIn.css";
import React, { useState } from "react";
import * as usersService from '../../utilities/users-service';

function SignIn({ setUser }) { // Receive setUser as a prop
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value, error: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        // The promise returned by the signUp service method 
        // will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        const user = await usersService.login(state);
        setUser(user);
      } catch {
        setError('Log In Failed - Try Again');
      }
    }



  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        name="email"
        placeholder="Email"
        value={state.email}
        type="email"
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        name="password"
        placeholder="Password"
        value={state.password}
        type="password"
        onChange={handleChange}
      />
      <p className="error-message">&nbsp;{error}</p>
      <button type="submit">LOG IN</button>
    </form>
    </div>
  );
}

export default SignIn;