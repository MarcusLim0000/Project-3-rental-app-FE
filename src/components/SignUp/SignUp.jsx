import './SignUp.css';
import { useState } from "react"
// import createUser from '../utilities/user-services'
import { signUp } from "../../utilities/users-api"

function SignUp(props) {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })

    const {getUser} = props
    
    function handleChange(evt) {
        setState({...state, [evt.target.name]: evt.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
     
        // try {
        //     await signUp(state);
        // } catch (error) {
        //     console.log(error)
        //     alert("An error occurred. Too bad.");
        // }

        getUser(state)
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