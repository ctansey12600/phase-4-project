import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <div>
            <p>
              Don't have an account?
              <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </p>
          </div>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div>
            <p>
              Already have an account?
              <button onClick={() => setShowLogin(true)}>Log In</button>
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default Login;
