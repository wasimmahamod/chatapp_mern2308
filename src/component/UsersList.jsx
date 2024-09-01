import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Signinimg from "../assets/signin.jpg";
import { getDatabase, ref, onValue } from "firebase/database";
import moment from "moment";
import { useSelector } from "react-redux";

const UsersList = () => {
  let data = useSelector((state) => state.userInfo.value);
  console.log(data);
  let [userList, setUserList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push(item.val());
        }
      });
      setUserList(array);
    });
  }, []);

  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5 ">
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Users List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className=" w-full  h-[347px] overflow-y-scroll rounded-[20px] ">
        {userList.map((item) => (
          <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
            <div className=" flex items-center gap-[14px] ">
              <img
                className=" w-[70px] h-[70px] rounded-full"
                src={item.image}
                alt=""
              />
              <div>
                <h3 className=" text-[18px] font-semibold text-black ">
                  {item.name}
                </h3>
                <p className=" text-[14px] font-semibold text-gray-500 ">
                  {" "}
                  {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                </p>
              </div>
            </div>
            <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
