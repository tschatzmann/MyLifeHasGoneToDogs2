import React from "react";
import Emojify from 'react-emojione';
import "./style.css";

export function BoneButton(props) {
  return (
    <Emojify>
        <button className="emoji-btn" role="img" aria-label="bone">🦴</button>
    </Emojify>
);
  }