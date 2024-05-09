import "./AuthPage.css";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import logo from "../../assets/rental-app-logo tpn.jpeg";

function AuthPage({ setUser }) {
  const [choice, setChoice] = useState(false);
  return (
    <main className="AuthPage">
      <div>
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
        {choice ? <SignIn setUser={setUser} /> : <SignUp setUser={setUser} />}
        <button onClick={() => setChoice(!choice)}>
          {choice ? "Sign Up Instead" : "Sign In Instead"}
        </button>
      </div>
    </main>
  );
}

export default AuthPage;
