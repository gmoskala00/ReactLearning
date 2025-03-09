import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [color, setColor] = useState("green");

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const addString = () => {
    setText((c) => c + "a");
  };

  const subtractCount = () => {
    setCount((c) => c - 1);
  };

  function changeColor() {
    setColor((c) => (c == "green" ? "red" : "green"));
  }

  useEffect(() => {
    document.title = text + count + color;
    return () => {};
  }, [count, color]);

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default MyComponent;
