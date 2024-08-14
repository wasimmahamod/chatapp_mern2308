import React from "react";
import ProfileImag from "../assets/signin.jpg";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

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
        <div className="w-full h-[89px] relative  mt-[78px] ">
          <div className="w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>
          <FaHome className=" text-[46px] text-primary absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>
    
          <AiFillMessage className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>
    
          <AiFillMessage className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>
    
          <AiFillMessage className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
