function SignUp() {
    return(
        <form style={{border: '1px solid blue'}}>
            SignUp
            <br/>
            <input label='name' placeholder='name pls' type='text'></input>
            <br/>
            <input label='email' placeholder='email pls' type='email'></input>
            <br/>
            <input label='password' placeholder='choose a password' type='password'></input>
        </form>
    )
}

export default SignUp