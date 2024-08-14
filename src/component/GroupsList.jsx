import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Signinimg from "../assets/signin.jpg";

const GroupsList = () => {
  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5 ">
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Groups List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className=" w-full  h-[347px] overflow-y-scroll rounded-[20px] ">
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                Friends Reunion
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Join
          </button>
        </div>
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                Friends Reunion
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Join
          </button>
        </div>
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                Friends Reunion
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Join
          </button>
        </div>
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                Friends Reunion
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Join
          </button>
        </div>
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                Friends Reunion
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Join
          </button>
        </div>
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                Friends Reunion
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupsList;
