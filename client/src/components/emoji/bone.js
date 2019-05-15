import React from "react";
import "./assets/css/style.css";

export function BoneButton(props) {
  return (
    // <Emojify>
                <button   className = "emoji-btn" >onClick={(e) => props.addUserReaction(e, props.allpost, props.emojiValue )} ><img className= "doghieght" style={{ textalignright: -10, paddingLeft: -10}}src={require('./assets/images/waggytail.jpg')} alt="waggy tail"/></button>

    // </Emojify>
);
  }