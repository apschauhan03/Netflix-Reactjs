import React, { useEffect, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignupScreen.css";
import { auth } from "../../firebase.js";

function SignupScreen() {
  const emailref = useRef(null);
  const passref = useRef(null);

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  return (
    <div className="Signup_block">
      <h1>Sign In</h1>
      <input ref={emailref} type="email" placeholder="Email"></input>
      <input ref={passref} type="password" placeholder="Password" />
      <button onClick={signin} type="submit">
        Sign In
      </button>
      <h4>
        <span className="newtonetflix">New to NETFLIX?</span>
        <span onClick={register} className="signupnow">
          {" "}
          Signup Now.
        </span>
      </h4>
    </div>
  );
}

export default SignupScreen;
