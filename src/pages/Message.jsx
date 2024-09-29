import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Astimg from "../assets/Astimg.png";
import masimg from "../assets/Astimg.png";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { IoIosCamera, IoIosSend } from "react-icons/io";
import FriendList from "../component/FriendList";
import { useSelector } from "react-redux";
import { push, ref, set, getDatabase, onValue } from "firebase/database";
import EmojiPicker from "emoji-picker-react";

const Massage = () => {
  let db = getDatabase();
  let [msgtext, setmsgtext] = useState("");
  let [emoji, setEmoji] = useState("");
  let [msgList, setmsgList] = useState([]);
  let chatdata = useSelector((state) => state.chatuserInfo.value);
  let data = useSelector((state) => state.userInfo.value);

  let handlemsgInput = (e) => {
    setmsgtext(e.target.value + emoji);
  };

  let handlemsgSubmit = () => {
    set(push(ref(db, "msg/")), {
      senderid: data.uid,
      sernder: data.displayName,
      reciver: chatdata.name,
      reciverid: chatdata.id,
      msg: msgtext,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }- ${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
    }).then(() => {
      setmsgtext("");
    });
  };

  useEffect(() => {
    const friendRef = ref(db, "msg/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          (data.uid == item.val().senderid &&
            chatdata.id == item.val().reciverid) ||
          (chatdata.id == item.val().senderid &&
            data.uid == item.val().reciverid)
        ) {
          array.push({ ...item.val(), key: item.key });
        }
      });
      setmsgList(array);
    });
  }, [chatdata && chatdata.id]);

  let handleEmoji = (e) => {
    setEmoji(e.emoji);
  };

  console.log(emoji);
  return (
    <>
      <div className="flex px-5 mt-[40px] gap-20 ">
        <div>
          <div className=" relative w-[427px] h-[59px] shadow-xl rounded-[20px] mb-5 ">
            <input
              className=" w-full h-full pl-[78px] items-center  rounded-[20px]"
              type="search"
              placeholder="Search"
            />
            <FiSearch
              size={19}
              className="absolute top-[50%] left-[23px] translate-y-[-50%] "
            />
            <BsThreeDotsVertical className="absolute top-[50%] right-[23px] translate-y-[-50%]" />
          </div>
          <FriendList />
        </div>
        {chatdata && (
          <div className="relative w-[789px] h-[900px] shadow-xl rounded-[20px] px-5 mt-[50px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[20px] relative">
                <img className="relative" src={masimg} alt="masimg" />
                {/* <div className="w-[15px] h-[15px] bg-green-500 rounded-full absolute bottom-[5px] right-[100px]">
                {" "}
              </div> */}
                <div>
                  <h2 className="text-[24px] font-semibold">
                    {chatdata && chatdata.name}{" "}
                  </h2>
                  <p>Online</p>
                </div>
              </div>
              <BsThreeDotsVertical size={20} />
            </div>
            <hr className="w-[600px] bg-black/25 ml-6 mt-5" />
            <div className="pt-[30px] h-[80%] border-b-[1px] border-gray-300 overflow-y-scroll no-scrollbar">
              {msgList.map((item) =>
                data.uid == item.senderid ? (
                  <div className="flex items-start flex-row-reverse mt-[29px] relative mr-2">
                    <div>
                      <p className="pt-[13px] pb-[20px] ps-[63px] pe-[52px] bg-secondary text-white rounded-[10px] font-poppins font-medium text-[16px]">
                        {item.msg}
                      </p>
                      <p className="font-poppins font-medium text-right text-[12px] text-textDeem">
                        Today, 2:01pm
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex  items-start flex-col mt-[29px] relative ml-2">
                    <div>
                      <p className="pt-[13px] pb-[20px] ps-[63px] pe-[52px] bg-primary text-white rounded-[20px] font-poppins font-medium text-[16px]">
                        {item.msg}
                      </p>
                      <p className="font-poppins font-medium text-[12px] text-textDeem">
                        Today, 2:01pm
                      </p>
                    </div>
                  </div>
                )
              )}

              {/* 
              <div className="flex items-start flex-row-reverse mt-[29px] relative mr-2">
                <div>
                  <p className="pt-[13px] pb-[20px] ps-[63px] pe-[52px] bg-secondary text-white rounded-[10px] font-poppins font-medium text-[16px]">
                    Hello
                  </p>
                  <p className="font-poppins font-medium text-right text-[12px] text-textDeem">
                    Today, 2:01pm
                  </p>
                </div>
              </div> */}
            </div>
            <div className=" absolute bottom-10 right-0">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
            <div className="absolute bottom-[26px] left-0 flex gap-5 ">
              <div className="relative w-[537px] h-[45px] shadow-xl rounded-[20px] ml-[54px]">
                <hr className="absolute bottom-[100px] w-[600px] bg-black/25 " />
                <input
                  value={msgtext}
                  onChange={handlemsgInput}
                  className=" w-full h-full pl-[10px] items-center  rounded-[20px] outline-none bg-[#F1F1F1]"
                  type="text"
                />
                <IoIosCamera className="absolute top-[50%] right-[23px] translate-y-[-50%] text-[30px] text-black/25" />
              </div>
              <button
                onClick={handlemsgSubmit}
                className="bg-primary px-2 py-1 rounded-[10px]"
              >
                <IoIosSend size={20} className="text-[#ffff]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Massage;
