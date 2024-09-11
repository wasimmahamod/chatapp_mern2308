import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Signinimg from "../assets/signin.jpg";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";
import moment from "moment";

const FriendRequestList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [friendrequestList, setFriendRequestList]=useState([])
  const db = getDatabase();
  useEffect(() => {
    const friendrequestRef = ref(db, "friendrequest/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if(data.uid ==item.val().reciverid){
          array.push({...item.val(), key:item.key})
        }
      });
      setFriendRequestList(array)
    });
  }, []);

  let handleAcceptFriend=(item)=>{
    set(push(ref(db, 'friendlist/')), {
      ...item,
    }).then(()=>{
      remove(ref(db, 'friendrequest/' + item.key))
    })
  }
  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5 mt-[43px] ">
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Friend Request List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className=" w-full  h-[347px] overflow-y-scroll rounded-[20px] ">
        {friendrequestList.map((item)=>(
        <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
          <div className=" flex items-center gap-[14px] ">
            <img
              className=" w-[70px] h-[70px] rounded-full"
              src={Signinimg}
              alt=""
            />
            <div>
              <h3 className=" text-[18px] font-semibold text-black ">
                {item.sendername}
              </h3>
              <p className=" text-[14px] font-semibold text-gray-500 ">
                {" "}
                {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
              </p>
            </div>
          </div>
          <button onClick={()=>handleAcceptFriend(item)} className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
            Accept
          </button>
        </div>

        ))}
     
      </div>
    </div>
  );
};

export default FriendRequestList;
