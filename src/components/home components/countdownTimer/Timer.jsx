import React, { useEffect, useState } from "react";

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
          .map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-sm uppercase font-semibold text-gray-600">
                {unit}
              </span>
              <span>{value}</span>
            </div>
          ))
          .reduce((prev, curr) => [
            prev,
            <small key={curr.key} className="text-red-500 flex items-end pb-1">
              :
            </small>,
            curr,
          ])}
      </div>
    </div>
  );
};

export default Timer;
