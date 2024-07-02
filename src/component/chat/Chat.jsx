import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  // for opening the emoji picker
  const [open, setOpen] = useState(false);
  // emoji is set default as false
  const [text, setText] = useState("");

  // use of the useRef for the closing and opening of the texts

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // handling the emoji section section
  const handleEmoji = (e) => {
    // if emoji selected then it automatically gets closed
    setText((prev) => prev + e.emoji);
    //set open is kept as false
    setOpen(false);
  };

  return (
    // chat section
    <div className="chat">
      {/* top section */}
      <div className="top">
        {/* user section */}
        <div className="user">
          {/* avatar img */}
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>Saikat Das</span>
            <p>Hii Akshat aaja mere ghar kahi bahar chalte hai..</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {/* other */}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hii, Ajja na mere ghar kyu nahi aaraha hai aaja bhai.. chalenge
              phir kahi ghumen bike par hii jayenge, aur baaki logo kon bhi
              lelenge
            </p>
            <span>30mins ago</span>
          </div>
        </div>
        {/* main */}
        <div className="message own">
          <div className="texts">
            <p>
              Hii, Ajja na mere ghar kyu nahi aaraha hai aaja bhai.. chalenge
              phir kahi ghumen bike par hii jayenge, aur baaki logo kon bhi
              lelenge
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* woh */}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hii, Ajja na mere ghar kyu nahi aaraha hai aaja bhai.. chalenge
              phir kahi ghumen bike par hii jayenge, aur baaki logo kon bhi
              lelenge
            </p>
            <span>59s ago</span>
          </div>
        </div>
        {/* main */}
        <div className="message own">
          <div className="texts">
            <p>
              Hii, Ajja na mere ghar kyu nahi aaraha hai aaja bhai.. chalenge
              phir kahi ghumen bike par hii jayenge, aur baaki logo kon bhi
              lelenge
            </p>
            <span>40sec ago</span>
          </div>
        </div>
        {/* woh */}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hii, Ajja na mere ghar kyu nahi aaraha hai aaja bhai.. chalenge
              phir kahi ghumen bike par hii jayenge, aur baaki logo kon bhi
              lelenge
            </p>
            <span>2min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          // here what is happening selecting the texta nd emoji and get chnges at the value section when cliclked
          value={text}
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            // here also it is handling the section
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            {/* handling the emohi with the handling event function */}
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
