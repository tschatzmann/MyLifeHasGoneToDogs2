import React from "react";

export function CageButton(props) {
  return (
    <button style={{ borderColor: "transparent", backgroundColor: "transparent" }} onClick={(e) => props.addUserReaction(e, props.allpost, props.emojiValue)} ><img className="emoji-btn doghouse" style={{ width: 40, height: 40, paddingLeft: -10 }} src={require('./assets/images/doginjailonbackground.png')} alt="dog cage" /></button>
  );
}