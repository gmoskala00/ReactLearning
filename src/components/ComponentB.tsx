import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC></ComponentC>
    </div>
  );
};

export default ComponentB;
