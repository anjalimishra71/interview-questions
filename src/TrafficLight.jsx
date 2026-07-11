import React, { useEffect, useState } from "react";

function TrafficLight() {
  const durations = {
    red: 5,
    yellow: 2,
    green: 10,
  };

  const [currentLight, setCurrentLight] = useState("red");
  const [timeLeft, setTimeLeft] = useState(durations.red);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(() => {
      if (timeLeft > 1) {
        setTimeLeft((prev) => prev - 1);
      } else {
        if (currentLight === "red") {
          setCurrentLight("green");
          setTimeLeft(durations.green);
        } else if (currentLight === "green") {
          setCurrentLight("yellow");
          setTimeLeft(durations.yellow);
        } else {
          setCurrentLight("red");
          setTimeLeft(durations.red);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentLight, timeLeft, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setCurrentLight("red");
    setTimeLeft(durations.red);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Traffic Light Simulator</h1>

      <div
        style={{
          width: "100px",
          margin: "20px auto",
          background: "#333",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "10px auto",
            backgroundColor: currentLight === "red" ? "red" : "#555",
          }}
        ></div>

        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "10px auto",
            backgroundColor: currentLight === "yellow" ? "yellow" : "#555",
          }}
        ></div>

        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "10px auto",
            backgroundColor: currentLight === "green" ? "green" : "#555",
          }}
        ></div>
      </div>

      <h2>
        {currentLight.toUpperCase()} : {timeLeft}s
      </h2>

      <button onClick={handleStart}>Start</button>

      <button onClick={handlePause} style={{ margin: "0 10px" }}>
        Pause
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TrafficLight;