import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LoginBtn(props) {
  return (
    <span className="login-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default LoginBtn;