import React, { useEffect, useRef, useState } from "react";

const Stoper = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const startTimeRef = useRef(0);
  const intervalIdRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        const updatedTime = new Date().getTime();
        setTime(updatedTime - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function startStoper() {
    setIsRunning(true);
    startTimeRef.current = new Date().getTime() - time;
  }

  function stopStoper() {
    setIsRunning(false);
  }

  function resetStoper() {
    setTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(time / 1000 / 60 / 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let miliseconds = Math.floor((time % 1000) / 10);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(
      miliseconds
    )}`;
  }

  function padZero(num: number) {
    return String(num).padStart(2, "0");
  }

  return (
    <div className="border border-3 rounded border-secondary-subtle p-5 bg-secondary">
      <p>{formatTime()}</p>
      <div className="d-flex flex-row justify-content-around">
        <button className="btn w-25 btn-lg btn-success" onClick={startStoper}>
          Start
        </button>
        <button className="btn w-25 btn-lg btn-warning" onClick={stopStoper}>
          Stop
        </button>
        <button className="btn w-25 btn-lg btn-danger" onClick={resetStoper}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stoper;
