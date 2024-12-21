import React, { useState } from "react";

const InputNotToDoList = ({
  setTaskInput,
  setHourInput,
  addItemToList,
  HourInput,
  TaskInput,
}) => {
  const handleInputTask = (e) => {
    setTaskInput(e.target.value);
  };
  const handleInputHours = (e) => {
    setHourInput(parseFloat(e.target.value));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center h-[50px] p-5 gap-2 drop-shadow-lg">
        <input
          type="email"
          className="h-[40px]"
          id="task"
          value={TaskInput}
          placeholder="Task"
          onChange={handleInputTask}
        />
        <input
          type="number"
          className="h-[40px]"
          id="hour"
          value={HourInput}
          placeholder="Hours"
          onChange={handleInputHours}
        />
        <button
          type="button"
          id="addTask"
          className="h-[40px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={addItemToList}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputNotToDoList;
