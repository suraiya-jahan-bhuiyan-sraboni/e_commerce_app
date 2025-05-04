import React, { useEffect, useState } from "react";
// import Countdown from "react-countdown";
// const Completionist = () => <span>You are good to go!</span>;

// const renderer = ({days,hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a completed state
//     return <Completionist />;
//   } else {
//     // Render a countdown
//     return (
//       <div className="flex gap-4 text-3xl items-end  ">
//         <span className="flex flex-col items-center gap-2">
//           <span>days</span> {days}
//         </span>
//         <p>:</p>
//         <span className="flex flex-col items-center gap-2">
//           <span>Hours</span>
//           {hours}
//         </span>
//         <p>:</p>
//         <span className="flex flex-col items-center gap-2">
//           <span>Minutes</span>
//           {minutes}
//         </span>
//         <p>:</p>
//         <span className="flex flex-col items-center gap-2">
//           <span>Seconds</span> {seconds}
//         </span>
//       </div>
//     );
//   }
// };

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
      if (!updatedTimeLeft) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  if (!timeLeft) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 text-gray-900 text-3xl font-bold">
        {Object.entries(timeLeft)
          .map(([unit, value], index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-sm uppercase font-semibold text-gray-600">
                {unit}
              </span>
              <span>{value}</span>
            </div>
          ))
          .reduce((prev, curr, index) => [
            prev,
            <small
              key={`key-${index}`}
              className="text-red-500 flex items-end pb-1"
            >
              :
            </small>,
            curr,
          ])}
      </div>
      {/* <div>
        <Countdown date={targetDate} renderer={renderer} />
      </div> */}
    </div>
  );
};

export default Timer;
