import React from "react";

const InputNotToDoList = () => {
  return (
    <div className="flex justify-center items-center p-5 gap-2 drop-shadow-lg">
      <div className="">
        <input
          type="email"
          className="form-control"
          id="task"
          placeholder="Task"
        />
      </div>
      <div className="">
        <input
          type="number"
          className="form-control"
          id="hour"
          placeholder="Hours"
        />
      </div>
      <button
        type="button"
        id="addTask"
        className="btn btn-primary"
        onclick="addTask()"
      >
        Add New Task
      </button>
    </div>
  );
};

export default InputNotToDoList;
