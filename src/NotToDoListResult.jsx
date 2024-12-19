import React from "react";

const NotToDoListResult = ({ entryHours, badHour }) => {
  return (
    <div className="px-[40px] my-3 w-[100%]">
      <div className="alert alert-success text-center">
        The total hours allocated is {badHour + entryHours} hrs!
      </div>
    </div>
  );
};

export default NotToDoListResult;
