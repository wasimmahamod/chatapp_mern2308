import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SigninImage from "../assets/signin.jpg";
import GoogleImage from "../assets/google.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const fprovider = new FacebookAuthProvider();
  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");

  let [passworderr, setPassworderr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid Email");
    }

    if (!password) {
      setPassworderr("Password is required");
    }

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;

          if (error.code.includes("auth/invalid-credential")) {
            setEmailerr("Invalid-credential");
          }
        });
    }
  };

  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let handleFacebookLogin = () => {
    signInWithPopup(auth, fprovider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-screen lg:flex px-2">
      <div className="lg:w-2/4 h-full lg:flex justify-end items-center  mt-10 lg:mt-0 ">
        <div className=" lg:mr-[69px] ">
          <h1 className=" text-center lg:text-left text-3xl lg:text-[34px] font-bold text-secondary  ">
            Login to your account!
          </h1>
          <div className=" flex lg:block">
            <button onClick={handleGoogleLogin} className=" mt-5">
              <img src={GoogleImage} alt="" />
            </button>
            <button onClick={handleFacebookLogin} className="mt-5">
              <img src={GoogleImage} alt="" />
            </button>
          </div>
          <div className=" lg:w-[368px]  h-[80px] mt-[61px]  relative ">
            <label
              className={` text-sm  font-semibold ${
                emailerr ? "text-red-500" : "text-secondary "
              } absolute top-[-10px] left-[50px] bg-white px-2  `}
            >
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className={`w-full h-full  border-b ${
                emailerr ? "border-red-500/50" : "border-secondary/50"
              }   pl-[50px]`}
              type="email"
              value={email}
              placeholder="Enter Your Email"
            />
            {emailerr && (
              <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
            )}
          </div>

          <div className=" lg:w-[368px]  h-[80px] mt-[61px]  relative ">
            <label className=" text-sm  font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
              {" "}
              Password
            </label>
            <input
              onChange={handlePassword}
              className="w-full h-full  border-b border-secondary/50   pl-[50px] "
              type={passwordshow ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password"
            />
            {passwordshow ? (
              <FaEye
                onClick={() => setPasswordshow(false)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordshow(true)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            )}
            {passworderr && (
              <p className=" text-red-500 text-xl font-normal">{passworderr}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className=" bg-primary w-full lg:w-[368px]  py-5 text-md lg:text-xl font-semibold text-white rounded-2xl mt-[51px] "
          >
            Login to Continue
          </button>
          <p className=" text-sm  text-secondary text-center w-[368px] mt-[35px] ">
            Already have an account ?{" "}
            <Link to="/signup" className=" text-[#EA6C00] font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-2/4 h-full  ">
        <img
          className="  ml-auto w-full h-full object-cover"
          src={SigninImage}
          alt="SignupImage"
        />
      </div>
    </div>
  );
};

export default Login;
