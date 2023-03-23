import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
    <h2>Digital Clock</h2>
    <div className="clock">
      <h2>{clockState}</h2>
    </div>
    </>
  );
};

export default DigitalClock;