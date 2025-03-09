import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ToDoList from "./components/ToDoList";
import MyComponent from "./components/MyComponent";
import MySizeComponent from "./components/MySizeComponent";
import DigitalClock from "./components/DigitalClock";
import ComponentA from "./components/ComponentA";
import { createElement, useState } from "react";

function App() {
  let [ShowAlert, setShowAlert] = useState(false);

  const handleShowClick = () => {
    setShowAlert(true);
  };

  const handleHideClick = () => {
    setShowAlert(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100 container justify-content-center align-items-center">
      <ComponentA></ComponentA>
      {/* <DigitalClock></DigitalClock> */}
      {/* <MySizeComponent></MySizeComponent> */}
      {/* <ToDoList></ToDoList> */}
      {/* <Button ButtonType="primary" onClick={handleShowClick}>
        My Button
      </Button>
      {ShowAlert && (
        <Alert isShown={ShowAlert} handleHideClick={handleHideClick}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below. Bu
        </Alert>
      )} */}
    </div>
  );
}

export default App;
