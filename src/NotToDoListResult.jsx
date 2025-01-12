import React from "react";

const NotToDoListResult = ({ entryHours, badHour }) => {
  return (
    <div className="my-3 w-full px-5">
      <div className="min-w-[100%] border p-4 rounded-lg bg-[#5cb85c] text-center">
        The total hours allocated is {badHour + entryHours} hrs!
      </div>
    </div>
  );
};

export default NotToDoListResult;
