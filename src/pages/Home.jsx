import React from "react";
import GroupsList from "../component/GroupsList";
import FriendList from "../component/FriendList";

const Home = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  console.log(data.name);
  return (
    <section className="py-9 flex  w-full justify-around">
      <div>
        <GroupsList />
        <FriendList />
      </div>
      <div>
        <GroupsList />
        <FriendList />
      </div>
      <div>
        <GroupsList />
        <FriendList />
      </div>
    </section>
  );
};

export default Home;
