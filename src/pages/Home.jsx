import React, { useEffect, useState } from "react";
import GroupsList from "../component/GroupsList";
import FriendList from "../component/FriendList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logedinUserInfo } from "../slices/userSlice";
import UsersList from "../component/UsersList";
import FriendRequestList from "../component/FriendRequestList";
import BlockList from "../component/BlockList";
import MyGroupsList from "../component/MyGroup";

const Home = () => {
  let dispatch = useDispatch();
  const auth = getAuth();
  let [verify, setVerify] = useState(false);
  let navigate = useNavigate();
  let data = useSelector((state) => state.userInfo.value);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(logedinUserInfo(user));
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      navigate("/login");
      setVerify(false);
    }
  });

  useEffect(() => {
    if (!data) {
      navigate("/login");
    } else if (!data.emailVerified) {
      setVerify(false);
    } else {
      setVerify(true);
    }
  }, []);

  return (
    <>
      {verify ? (
        <section className="py-9 flex  w-full justify-around">
          <div>
            <GroupsList />
            <FriendRequestList />
          </div>
          <div>
            <FriendList />
            <MyGroupsList />
          </div>
          <div>
            <UsersList />
            <BlockList />
          </div>
        </section>
      ) : (
        <div className="w-full h-screen bg-primary/50  absolute top-0 left-0  flex justify-center items-center">
          <h1 className="text-2xl text-white ">Please verify Your Email </h1>
        </div>
      )}
    </>
  );
};

export default Home;
