import React, { useState } from "react";

const InputNotToDoList = ({ setTaskInput, setHourInput, addTask }) => {
  const handleInputTask = (e) => {
    setTaskInput(e.target.value);
  };
  const handleInputHours = (e) => {
    setHourInput(parseFloat(e.target.value));
  };

  return (
    <div className="flex justify-center items-center p-5 gap-2 drop-shadow-lg">
      <div className="">
        <input
          type="email"
          className="form-control"
          id="task"
          placeholder="Task"
          onChange={handleInputTask}
        />
      </div>
      <div className="">
        <input
          type="number"
          className="form-control"
          id="hour"
          placeholder="Hours"
          onChange={handleInputHours}
        />
      </div>
      <button
        type="button"
        id="addTask"
        className="btn btn-primary"
        onClick={addTask}
      >
        Add New Task
      </button>
    </div>
  );
};

export default InputNotToDoList;
