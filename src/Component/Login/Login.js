import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // user state 
  const [user, setUser] = useState({
    signInUser: false,
    name: "",
    photo: "",
    email: "",
    error: "",
    password: "",
    confirmPassword: "",
    success: false,
  });

  var provider = new firebase.auth.GoogleAuthProvider();
// google login...... method bellow
  const googleHandleBtn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const isSignInUser = {
          signInUser: true,
          name: displayName,
          photo: photoURL,
          email: email,
        };
        setUser(isSignInUser);
        setLoggedInUser(isSignInUser);
        AuthToken();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
// input value and condition here........... 
  const handleChange = (e) => {
    let inputValue = true;
    if (e.target.name === "name") {
      inputValue = e.target.value;
    }
    if (e.target.name === "email") {
      const emailValid = /\S+@\S+\.\S+/;
      inputValue = emailValid.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordValid = /\S+\d.{3,16}\S+/.test(e.target.value);
      inputValue = passwordValid;
    }

    if (e.target.name === "confirmPassword") {
      const passwordValid = /\S+\d.{3,16}\S+/.test(e.target.value);
      inputValue = passwordValid;
    }
    if (inputValue) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;

      setUser(newUserInfo);
    }
  };
  //create user...... 
  const formSubmit = (e) => {
    if (
      newUser &&
      user.email &&
      user.password &&
      user.password === user.confirmPassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setNewUser(newUserInfo);
          updateUserName(user.name);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          setNewUser(newUserInfo);
        });
    }
    // signIn user method
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setNewUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          setNewUser(newUserInfo);
        });
    }

    e.preventDefault();
  };
  // update user information.
  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("update user name successfully");
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  // token authentication here........... 
  const AuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("admin", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="LoginMainContainer">
      <div className="container ">
        <h5>{loggedInUser.name || loggedInUser.email}</h5>
        <div className="loginContainer" onSubmit={formSubmit}>
          <form action="">
            {!newUser ? <h2>Login</h2> : <h2>Create an account</h2>}
            {newUser && (
              <input
                onBlur={handleChange}
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
            )}
            <br />
            <br />
            <input
              onBlur={handleChange}
              type="email"
              name="email"
              id=""
              placeholder="me@example.com"
              required
            />
            <br />
            <br />
            <input
              onBlur={handleChange}
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <br />
            <br />
            {newUser && (
              <input
                onBlur={handleChange}
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm password"
              />
            )}
            <br />
            <br />
            <input type="checkbox" name="" id="" /> <span> Remember Me</span>
            <p>Forgot Password</p>
            <br />
            {!newUser ? (
              <input
                style={{
                  backgroundColor: "#71BA58",
                  color: "white",
                  fontWeight: "700",
                  letterSpacing: "5px",
                  fontSize: "20px",
                  borderRadius: "5px",
                }}
                type="submit"
                value="Login"
              />
            ) : (
              <input
                style={{
                  backgroundColor: "#71BA58",
                  color: "white",
                  fontWeight: "700",
                  letterSpacing: "5px",
                  fontSize: "20px",
                  borderRadius: "5px",
                }}
                type="submit"
                value="SingUp"
              />
            )}
          </form>
          <br />
          <br />
          <br />
          {!newUser ? (
            <p>
              Don't have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#71BA58",
                  borderBottom: "1px solid #71BA58",
                }}
                onClick={() => setNewUser(!newUser)}
              >
                Create an account
              </span>{" "}
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#71BA58",
                  borderBottom: "1px solid #71BA58",
                }}
                onClick={() => setNewUser(!newUser)}
              >
                Login
              </span>{" "}
            </p>
          )}
          <p style={{ color: "red" }}>{newUser.error}</p>
        </div>
        <br />
        <h5 style={{ textAlign: "center" }}>Or</h5>
        <br />
        <div className="loginContainer">
          <input
            className="loginBtn"
            type="button"
            name=""
            id=""
            value="Continue with Facebook"
          />
          <br />
          <br />
          <br />
          <input
            className="loginBtn"
            onClick={() => googleHandleBtn()}
            type="button"
            name=""
            id=""
            value="Continue with Google"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
