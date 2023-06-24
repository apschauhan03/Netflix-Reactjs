import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login.js";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/counterSlice";

function App() {
  const [user, setuser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          login({
            uid: u.uid,
            email: u.email,
          })
        );
        setuser({
          user: u.uid,
        });
      } else {
        // User is signed out
        // ...
        dispatch(logout);
      }
    });
    return unsubscribe;
  });
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>{" "}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
