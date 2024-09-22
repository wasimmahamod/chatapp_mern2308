import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import Signinimg from "../assets/signin.jpg";
import { useSelector } from "react-redux";
import moment from "moment";

const BlockList = () => {
  let data = useSelector((state) => state.userInfo.value);
  const db = getDatabase();
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blockedUsersRef = ref(db, "blocklist/");
    const unsubscribe = onValue(blockedUsersRef, (snapshot) => {
      const users = [];
      snapshot.forEach((item) => {
        const itemData = item.val();
        if (data.uid === itemData.blockby || data.uid === itemData.blockuser) {
          users.push({ ...itemData, key: item.key });
        }
      });
      setBlockedUsers(users);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [db, data.uid]);

  const HandleUnBlock = (item) => {
    set(push(ref(db, "friendlist/")), {
      senderid: item.blockby,
      sendername: item.blockbyname,
      recivername: item.blockusername,
      reciverid: item.blockuser,
    }).then(() => {
      remove(ref(db, "blocklist/" + item.key));
    });
  };

  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5  ">
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Block List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className=" w-full  h-[347px]  overflow-y-scroll rounded-[20px] ">
        {blockedUsers.map((item) => (
          <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
            <div className=" flex items-center gap-[14px] ">
              {console.log(item)}
              <img
                className=" w-[70px] h-[70px] rounded-full"
                src={Signinimg}
                alt=""
              />
              <div>
                {data.uid === item.blockby ? (
                  <h3 className=" text-[18px] font-semibold text-black ">
                    {item.blockusername}
                  </h3>
                ) : (
                  <h3 className=" text-[18px] font-semibold text-black ">
                    {item.blockbyname}
                  </h3>
                )}

                <p className=" text-[14px] font-semibold text-gray-500 ">
                  {" "}
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            {data.uid == item.blockby && (
              <button
                onClick={() => HandleUnBlock(item)}
                className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg "
              >
                UnBlock
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockList;
