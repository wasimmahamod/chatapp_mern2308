import React, { useState } from "react";
import SignupImage from "../assets/signup.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Singup = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

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
    }
    if (!name) {
      setNameerr("Name is required");
    }
    if (!password) {
      setPassworderr("Password is required");
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
            <label className=" text-sm  font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
              {" "}
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className="w-full h-full  border border-secondary/50 rounded-lg  pl-[50px] "
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

          <button
            onClick={handleSubmit}
            className=" bg-primary w-[368px]  py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px] "
          >
            Sign Up
          </button>
          <p className=" text-sm  text-secondary text-center w-[368px] mt-[35px] ">
            Already have an account ?{" "}
            <Link className=" text-[#EA6C00] font-bold">Sign In</Link>
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
