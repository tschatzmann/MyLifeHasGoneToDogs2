import React from "react";
import Emojify from 'react-emojione';
import "./style.css";

export function NewspaperButton(props) {
  return (
    <Emojify>
        <button className="emoji-btn" onClick={(e) => props.addNewspaper(e, props.allpost)} role="img" aria-label="newspaper">🗞️</button>
    </Emojify>
);
  }