import { useState } from "react"
// import createUser from '../utilities/user-services'
import { signUp } from "../../utilities/users-api"

function SignUp() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })
    
    function handleChange(evt) {
        setState({...state, [evt.target.name]: evt.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        //instead of calling the console.log, this function sends the form details to 
        //utilities, to first check if user exists, if yes, return error, if no create new user
        //can consider doing the disableSubmit() function if any fields are empty (if we are bored)
        //added async here becos we nid to add try catch block to interact with backend later
        try {
            await signUp(state);
            alert("sign up successful")
        } catch (error) {
            console.log(error)
            alert("An error occurred. Too bad.");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            SignUp
            <br/>
            <input name='name' placeholder='name pls' type='text' value={state.name} onChange={handleChange}></input>
            <br/>
            <input name='email' placeholder='email pls' type='email' value={state.email} onChange={handleChange}></input>
            <br/>
            <input name='password' placeholder='choose a password' type='password' value={state.password} onChange={handleChange}></input>
            <button type='submit'>SIGN UP</button>
        </form>
    )
}

export default SignUp