import React from 'react';

const TimerForm = ({ title, setTitle, targetDate, setTargetDate }) => {
  return (
    <div className="mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter Offer Details"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg  bg-gray-100  focus:outline-none focus:ring-2"
      />
      <input
        type="datetime-local"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        className="w-full p-3 bg-gray-100 rounded-lg  focus:outline-none focus:ring-2"
      />
    </div>
  );
};

export default TimerForm;