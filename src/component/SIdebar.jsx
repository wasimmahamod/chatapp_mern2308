import React, { useState } from "react";
import ProfileImag from "../assets/signin.jpg";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaCloudUploadAlt } from "react-icons/fa";

const SIdebar = () => {
  let [imageModal, setImageModal] = useState(false);
  let data = useSelector((state) => state.userInfo.value);

  return (
    <div className=" h-screen py-9 px-8  rounded-4xl ">
      <div className=" w-[186px] h-full rounded-3xl bg-primary ">
        <div className=" text-center pt-9">
          <div className="w-[100px] h-[100px] group relative overflow-hidden  mx-auto rounded-full  ">
            <img className=" w-full h-full  " src={data.photoURL} alt="" />

            <div className="w-full h-full cursor-pointer bg-black/50 opacity-0  group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center">
              <FaCloudUploadAlt className=" text-white text-2xl" />
            </div>
          </div>
        </div>
        <h2 className="text-white text-xl text-center font-bold font-nunito mt-3">
          {data.displayName}
        </h2>
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
