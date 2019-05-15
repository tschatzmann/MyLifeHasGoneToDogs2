import React from "react";


export function DisplayDog(props){
    return (
        <div className="form-group">
<img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif"/>
        </div>

    )
};

export function TextArea(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="1" {...props}/>
      </div>
    );
  };
  
