import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Signinimg from "../assets/signin.jpg";
import { useSelector } from "react-redux";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";

const FriendList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [friendList, setFriendList] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    const friendRef = ref(db, "friendlist/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().senderid ||
          data.uid == item.val().reciverid
        ) {
          array.push({ ...item.val(), key: item.key });
        }
      });
      setFriendList(array);
    });
  }, []);

  let HandleBlock = (item) => {
    console.log(item);
    if (data.uid == item.senderid) {
      set(push(ref(db, "blocklist/")), {
        blockby: item.senderid,
        blockbyname: item.sendername,
        blockuser: item.reciverid,
        blockusername: item.recivername,
      }).then(() => {
        remove(ref(db, "friendlist/" + item.key));
      });
      {
      }
    } else {
      set(push(ref(db, "blocklist/")), {
        blockby: item.reciverid,
        blockbyname: item.recivername,
        blockuser: item.senderid,
        blockusername: item.sendername,
      }).then(() => {
        remove(ref(db, "friendlist/" + item.key));
      });
    }
  };
  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5  ">
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Friend List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className=" w-full  h-[347px]  overflow-y-scroll rounded-[20px] ">
        {friendList.map((item) => (
          <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
            <div className=" flex items-center gap-[14px] ">
              <img
                className=" w-[70px] h-[70px] rounded-full"
                src={Signinimg}
                alt=""
              />
              <div>
                {data.uid == item.senderid ? (
                  <h3 className=" text-[18px] font-semibold text-black ">
                    {item.recivername}
                  </h3>
                ) : (
                  <h3 className=" text-[18px] font-semibold text-black ">
                    {item.sendername}
                  </h3>
                )}
                <p className=" text-[14px] font-semibold text-gray-500 ">
                  {" "}
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button
              onClick={() => HandleBlock(item)}
              className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg "
            >
              Block
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
