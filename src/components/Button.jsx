import React from "react";

function Button(props) {
  return (
    <div>
      <button className="btn btn-danger" type={props.type} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
