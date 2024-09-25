import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Signinimg from "../assets/signin.jpg";
import { push, ref, set,getDatabase } from "firebase/database";
import { useSelector } from "react-redux";
const GroupsList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let db = getDatabase()
  let [groupmodal , setGroupModal]=useState(false)
  let [groupname , setGroupname]=useState('')

  let handleCreateGroup=()=>{
    set(push(ref(db, "grouplist/")), {
      name : groupname,
      adminid:data.uid, 
      admin:data.displayName
    }).then(()=>{
      setGroupModal(false)
    })
  }
  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5 ">
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Groups List</h2>
        {groupmodal ? 
        <button onClick={()=>setGroupModal(false)} className=" bg-red-500 py-2 px-3 text-white rounded-md">Cancel</button>
        :
        <button onClick={()=>setGroupModal(true)} className=" bg-primary py-2 px-3 text-white rounded-md">Create Group</button>
        
      }
        <BsThreeDotsVertical />
      </div>

      <div className=" w-full  h-[347px] overflow-y-scroll rounded-[20px] ">
        {groupmodal ? 
        <div className=" py-5  ">
          <h2 className=" text-2xl font-nunito font-medium text-primary ">Create Group </h2>
          <input onChange={(e)=>setGroupname(e.target.value)} placeholder="Enter Your Group Name" className="  border  w-full py-3 px-3 "  type="text" />
          <button onClick={handleCreateGroup}  className=" bg-primary py-2 px-3 text-white rounded-md mt-2">Submit</button>
        </div>
        :
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
      
      }
   
      </div>
    </div>
  );
};

export default GroupsList;
