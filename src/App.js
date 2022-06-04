import { useRef, useState } from "react";


import "./App.css";
import { signUp, useAuth, logOut } from "./firebase";

function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth()

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setLoading(true)

    try {
      logOut();
    } catch {
      alert('Error');
    }
    
    setLoading(false);
  }

  return (
    <div id="main">

      <div>Current logged in as: {currentUser?.email} </div>
      <div id="fields">
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>
      <button disable={loading || currentUser} onClick={handleSignUp}>Sign Up</button>

      <button disabled={} onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default App;
