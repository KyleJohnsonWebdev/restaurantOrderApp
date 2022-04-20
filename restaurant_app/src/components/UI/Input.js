import React from "react";
import classes from "./Input.module.css";

// You get the ref which can now be set through the ref prop on your Component,
// as a second parameter here, and you can now use it inside of your Component
// function to forward that ref to that input here

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
