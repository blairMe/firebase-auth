import { useRef } from "react";

import "./App.css";
import { signUp } from "./firebase";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async () => {
    await signUp(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div id="main">
      <div id="fields">
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default App;
