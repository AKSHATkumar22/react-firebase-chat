import ChatList from "./ChatList/ChatList";

import "./list.css";

import Userinfo from "./userInfo/Userinfo";

const List = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default List;
