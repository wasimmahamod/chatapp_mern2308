import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../assets/signup.png";
import { RotatingLines } from "react-loader-spinner";

const Singup = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);
  let [loader, setLoader] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
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
    if (!name) {
      setNameerr("Name is required");
    }
    if (!password) {
      setPassworderr("Password is required");
    }

    if (email && name && password) {
      setLoader(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            setTimeout(() => {
              setLoader(false);
              navigate("/");

              const user = userCredential.user;
              console.log(user);
            }, 2000);
          });
        })
        .catch((error) => {
          setTimeout(() => {
            setLoader(false);
            // if(error.code.includes('auth/email-already-in-use')){
            //   setEmailerr("Email already in use ")
            // }
            error.code.includes("auth/email-already-in-use") &&
              setEmailerr("Email already in use ");

            console.log(error.code);
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
          }, 2000);
        });
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center ">
        <div className=" mr-[69px] ">
          <h1 className=" text-[34px] font-bold text-secondary  ">
            Get started with easily register
          </h1>
          <p className=" text-xl font-normal text-black  opacity-50">
            Free register and you can enjoy it
          </p>
          <div className=" w-[368px]  h-[80px] mt-[61px]  relative ">
            <label
              className={` text-sm  font-semibold ${
                emailerr ? "text-red-500" : "text-secondary "
              } absolute top-[-10px] left-[50px] bg-white px-2  `}
            >
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className={`w-full h-full  border ${
                emailerr ? "border-red-500/50" : "border-secondary/50"
              } rounded-lg  pl-[50px]`}
              type="email"
              value={email}
              placeholder="Enter Your Email"
            />
            {emailerr && (
              <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
            )}
          </div>
          <div className=" w-[368px]  h-[80px] mt-[61px]  relative ">
            <label className=" text-sm  font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
              {" "}
              Full Name
            </label>
            <input
              onChange={handleName}
              className="w-full h-full  border border-secondary/50 rounded-lg  pl-[50px] "
              type="text"
              value={name}
              placeholder="Enter Your Name"
            />
            {nameerr && (
              <p className=" text-red-500 text-xl font-normal">{nameerr}</p>
            )}
          </div>
          <div className=" w-[368px]  h-[80px] mt-[61px]  relative ">
            <label className=" text-sm  font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
              {" "}
              Password
            </label>
            <input
              onChange={handlePassword}
              className="w-full h-full  border border-secondary/50 rounded-lg  pl-[50px] "
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

          {loader ? (
            <div className="w-[368px] text-center flex justify-center">
              {/* <DNA 
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          /> */}
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="blue"
                strokeColor="red"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass="mx-auto"
              />
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className=" bg-primary w-[368px]  py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px] "
            >
              Sign Up
            </button>
          )}

          <p className=" text-sm  text-secondary text-center w-[368px] mt-[35px] ">
            Already have an account ?{" "}
            <Link to="/" className=" text-[#EA6C00] font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 h-full  ">
        <img
          className="ml-auto w-full h-full object-cover"
          src={SignupImage}
          alt="SignupImage"
        />
      </div>
    </div>
  );
};

export default Singup;
