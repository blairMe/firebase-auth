import { useRef, useState } from "react";

import "./App.css";
import { signUp } from "./firebase";

function App() {
  const [loading, setLoading] = useState(false);

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

  return (
    <div id="main">
      <div id="fields">
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>
      <button disable={loading} onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default App;
