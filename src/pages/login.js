/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../Login.css";
import {useNavigate} from "react-router-dom"


const Login = ({ setIsAuth }) => {

    let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/")
    });
  };

  return (
    <div>
      <div className="text-center my-5">
        <h3 className="label">Sign in with:</h3>
        <img
          style={{ cursor: "pointer" }}
          className="my-3"
          alt="google btn"
          src="/assets/google-btn.png"
          onClick={signInWithGoogle}
        ></img>
        {/* <iframe
          className="my-3"
          src="https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/web/demos/signin_contextual_custom"
          style={{ width: "250px", height: "66px" }}
        ></iframe> */}
      </div>
    </div>
  );
};

export default Login;
