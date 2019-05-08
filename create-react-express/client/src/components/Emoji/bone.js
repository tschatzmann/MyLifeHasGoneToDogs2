import React from "react";
import Emojify from 'react-emojione';
import "./style.css";

export function BoneButton(props) {
  return (
    <Emojify>
        <button className="emoji-btn" onClick={(e) => props.addUserReaction(e, props.allpost, props.emojiValue)} role="img" aria-label="bone">🦴</button>
    </Emojify>
);
  }