import React from 'react'
// import Chatitem from './Chatitem'
import { AiOutlineDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import './styles.css';


const ChatRoom = () => {
  const roomsList = ["general", "patients", "staffs"];

  return (
    <div>
    <div className="messagepanel">
      <div className="sidebar_msg">
        <div className="sidebar_8">
          <div className="sidebar_m"> messages </div>
          <div className="angle">
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div className="Div">1 </div>

      <div className="seach_box">
        <div className="search_logo">
          <BiSearch />
        </div>
        <div className="search_m">search messages</div>
        <div className="Div"></div>
      </div>
    </div>
<div className="messagelist">

 {
  roomsList.map((room) =>(
      <p key={room} >{room}</p>
  ))
}
</div>
</div>

  );
}

export default ChatRoom