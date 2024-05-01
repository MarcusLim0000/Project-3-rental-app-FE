import './SignIn.css';
import { useState } from "react"
import axios from 'axios'

function SignIn() {
const [state, setState] = useState({
    email: '',
    password: '',
})

function handleChange(evt) {
    setState({...state, [evt.target.name]: evt.target.value})
  
}

async function handleSubmit(email, password) {
    try {
        const response = await axios.post('http://localhost:3005/api/users/sign-in', {
            email: email,
            password: password
        });
        // Handle successful sign-in response
        alert ('WOOOOO!')
        console.log(response); // This would likely be the JWT token
    } catch (error) {
        // Handle sign-in error
        console.error('Sign-in failed:', error.response.data);
    }
   
    // Clear the password field from the state
    setState({...state, password: ''});
}

    return(
        <form onSubmit={handleSubmit}>
            SignIn
            <br/>
            <input name='email' placeholder='email' value={state.email} type='email' onChange={handleChange} />
            <br/>
            <input name='password' placeholder='password' value={state.password} type='password' onChange={handleChange}></input>
            <button type='submit'>LOG IN</button>
        </form>
    )
}

export default SignIn