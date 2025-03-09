import React, { useState, useEffect, useRef } from "react";

const UseRefComponent = () => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  const handleClick1 = () => {
    inputRef1.current?.focus();
    if (inputRef1.current) {
      inputRef1.current.style.backgroundColor = "yellow";
    }
    if (inputRef2.current) {
      inputRef2.current.style.backgroundColor = "";
    }
    if (inputRef3.current) {
      inputRef3.current.style.backgroundColor = "";
    }
  };

  const handleClick2 = () => {
    inputRef2.current?.focus();
    if (inputRef1.current) {
      inputRef1.current.style.backgroundColor = "";
    }
    if (inputRef2.current) {
      inputRef2.current.style.backgroundColor = "yellow";
    }
    if (inputRef3.current) {
      inputRef3.current.style.backgroundColor = "";
    }
  };

  const handleClick3 = () => {
    inputRef3.current?.focus();
    if (inputRef1.current) {
      inputRef1.current.style.backgroundColor = "";
    }
    if (inputRef2.current) {
      inputRef2.current.style.backgroundColor = "";
    }
    if (inputRef3.current) {
      inputRef3.current.style.backgroundColor = "yellow";
    }
  };

  return (
    <div className="d-flex flex-column">
      <button onClick={handleClick1}>Click Me1</button>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick2}>Click Me2</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick3}>Click Me3</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
};

export default UseRefComponent;
