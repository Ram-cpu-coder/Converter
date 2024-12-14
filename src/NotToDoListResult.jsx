import React from "react";

const NotToDoListResult = () => {
  return (
    <div className="px-[40px]">
      <div className="alert alert-success text-center">
        The total hours allocated = <span id="totalHours">0</span> hrs!
      </div>
    </div>
  );
};

export default NotToDoListResult;
