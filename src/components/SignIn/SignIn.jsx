import './SignIn.css';
import { useState } from "react"

function SignIn(props) {
const [state, setState] = useState({
    email: '',
    password: '',
})
const {getUser} = props

function handleChange(evt) {
    setState({...state, [evt.target.name]: evt.target.value})
  
}

async function handleSubmit(e){
    e.preventDefault()
    console.log(state)
   getUser(state)
     //instead of calling the console.log, this function sends the form details to 
        //utilities, to first check if user exists, if yes, check if password match, if no return error
        //can consider doing the disableSubmit() function if any fields are empty (if we are bored)
        //used async function here cos nid to try catch later to interact with backend

    setState({...state, password: ''})
    //can consider the above function to remove the password, if the password provided was wrong
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