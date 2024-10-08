import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Signinimg from "../assets/signin.jpg";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import moment from "moment";
import { useSelector } from "react-redux";
import SingupImage from "../assets/signup.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UsersList = () => {
  let data = useSelector((state) => state.userInfo.value);
  console.log(data);
  let [userList, setUserList] = useState([]);
  let [requestList, setRequestList] = useState([]);
  let [friendList, setFriendList] = useState([]);
  let [searchList, setSearchList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push({ ...item.val(), uid: item.key });
        }
      });
      setUserList(array);
    });
  }, []);
  useEffect(() => {
    const friendrequestRef = ref(db, "friendrequest/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().reciverid);
      });
      setRequestList(array);
    });
  }, []);
  useEffect(() => {
    const friendrequestRef = ref(db, "friendlist/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().reciverid);
      });
      setFriendList(array);
    });
  }, []);

  let handleFriendrequest = (item) => {
    set(push(ref(db, "friendrequest/")), {
      senderid: data.uid,
      sendername: data.displayName,
      senderemail: data.email,
      reciverid: item.uid,
      recivername: item.name,
      reciveremail: item.email,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }- ${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
    }).then(() => {
      toast("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };


  let handleSearch=(e)=>{
    let search = userList.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchList(search)
  }


  return (
    <div className=" w-[427px]  shadow-xl rounded-[20px] px-5 ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    
      {/* Same as */}
      <div className="flex  justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-black ">Users List</h2>
        <BsThreeDotsVertical />
      </div>
      <input onChange={handleSearch} placeholder="Search ..." className=" w-full h-[40px] px-5 border mt-3 " type="text" />
      <div className=" w-full  h-[347px] overflow-y-scroll rounded-[20px] ">
        {searchList.length > 0 ? 
          searchList.map((item) => (
            <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
              <div className=" flex items-center gap-[14px] ">
                <img
                  className=" w-[70px] h-[70px] rounded-full"
                  src={item ? item.image : SingupImage}
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
              {friendList.includes(data.uid + item.uid) ||
              friendList.includes(item.uid + data.uid) ? (
                <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
                  F
                </button>
              ) : requestList.includes(data.uid + item.uid) ||
                requestList.includes(item.uid + data.uid) ? (
                <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
                  P
                </button>
              ) : (
                <button
                  onClick={() => handleFriendrequest(item)}
                  className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg "
                >
                  Add
                </button>
              )}
            </div>
          )) 
          :
        
        userList.map((item) => (
          <div className=" flex justify-between items-center  border-b border-black/25 pb-6 mt-4">
            <div className=" flex items-center gap-[14px] ">
              <img
                className=" w-[70px] h-[70px] rounded-full"
                src={item ? item.image : SingupImage}
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
            {friendList.includes(data.uid + item.uid) ||
            friendList.includes(item.uid + data.uid) ? (
              <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
                F
              </button>
            ) : requestList.includes(data.uid + item.uid) ||
              requestList.includes(item.uid + data.uid) ? (
              <button className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg ">
                P
              </button>
            ) : (
              <button
                onClick={() => handleFriendrequest(item)}
                className=" bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg "
              >
                Add
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
