import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(num: number) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <div className="clock-container min-vw-100 d-flex container justify-content-center align-items-center">
      <p className="fw-bold font-monospace font-weight-medium">
        {formatTime()}
      </p>
    </div>
  );
};

export default DigitalClock;
