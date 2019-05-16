import React from "react";


export function NewspaperButton(props) {
  return (
         <button  style={{borderColor: "transparent", backgroundColor: "transparent"}} onClick={(e) => props.addUserReaction(e, props.allpost, props.emojiValue )} ><img className= "emoji-btn doghouse" style={{width: 40, height: 40, paddingLeft: -10}}src={require('./assets/images/dognewspaper.jpeg')} /></button>
);
  }