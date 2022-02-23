// Code Keypad Component Here
import React from "react";

const Keypad = () => {
  function keyPadHandler() {
    console.log("Entering password...");
  }
  return <input onChange={keyPadHandler} type="password" />;
};

export default Keypad;
