import React from "react";
import './login.css';

const Login = () => {
  return (
    <>
      <h1 className="heading">The Login</h1>
      <form className="form_holder">
        <div>
          <label>Username:</label>
          <input className='' type="text"></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password"></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      <div>Signup</div>
    </>
  );
}

export default Login;