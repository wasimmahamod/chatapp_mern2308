import React from "react";
import ProfileImag from "../assets/signin.jpg";
import { FaHome } from "react-icons/fa";

const SIdebar = () => {
  return (
    <div className=" h-screen py-9 px-8  rounded-4xl ">
      <div className=" w-[186px] h-full rounded-3xl bg-primary ">
        <div className=" text-center">
          <img
            className="w-[100px] h-[100px]  rounded-full  mt-9 inline-block"
            src={ProfileImag}
            alt=""
          />
        </div>
        <div className="w-full h-[89px] relative  ">
          <div className="w-[168px] h-[89px] bg-white ml-auto"></div>
          <FaHome className=" text-[46px] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] " />
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
