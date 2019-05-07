import React from "react";
import Emojify from 'react-emojione';
import "./style.css";

export function BoneButton(props) {
  return (
    <Emojify>
        <button className="emoji-btn" onClick={(e) => props.addBone(e, props.allpost)} role="img" aria-label="bone">🦴</button>
    </Emojify>
);
  }