import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

function AuthPage() {
    return(
        <div>
            AuthPage
            <SignIn/>
            <button>OR (the role is to toggle between sign in/up)</button>
            <SignUp/>
        </div>
    )
}

export default AuthPage