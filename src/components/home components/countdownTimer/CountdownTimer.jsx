import React, { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

const CountdownTimer = () => {
   const [targetDate, setTargetDate] = useState("2025-05-25T00:00:00");
   const [title, setTitle] = useState();


  return (
    <div className="">
      {!targetDate && (
        <TimerForm
          title={title}
          setTitle={setTitle}
          targetDate={targetDate}
          setTargetDate={setTargetDate}
        />
      )}
      <Timer targetDate={targetDate} title={title} />
    </div>
  );
};

export default CountdownTimer;
