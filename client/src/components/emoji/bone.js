import React from "react";
// import "./assets/css/style.css"

export function BoneButton(props) {
  return (
    // <Emojify>
                <button   style={{borderColor: "transparent", backgroundColor: "transparent"}} onClick={(e) => props.addUserReaction(e, props.allpost, props.emojiValue )} ><img  style={{width: 40, height: 40, textalignright: -10, paddingLeft: -10}}src={require('./assets/images/waggytail.jpg')} alt="waggy tail"/></button>

    // </Emojify>
);
  }