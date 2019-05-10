import React from "react";
// import Emojify from 'react-emojione';
import "./style.css";



export function CageButton(props) {
  return (
    // <Emojify>
        <button  style={{borderColor: "transparent", backgroundColor: "transparent"}} onClick={(e) => props.addUserReaction(e, props.allpost, props.emojiValue )} ><img className= "emoji-btn doghouse" style={{width: 20, height: 20, paddingLeft: -10}}src={require('./assets/images/doghouse.jpeg')} /></button>
    /* // </Emojify> */
);
  }