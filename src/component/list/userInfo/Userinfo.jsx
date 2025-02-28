import { useUserStore } from "../../../lib/userStore";
import "./UserInfo.css";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="UserInfo">
      <div className="user">
        <img src={currentUser || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
