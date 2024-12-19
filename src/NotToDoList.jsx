import React from "react";
import { useState } from "react";

import InputNotToDoList from "./InputNotToDoList";
import EntryLists from "./EntryLists";
import BadList from "./BadList";
import NotToDoListResult from "./NotToDoListResult";

const NotToDoList = () => {
  const randomIdGenerator = () => {
    let randomId = "";
    const randomStringLength = 10;
    const string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < randomStringLength; i++) {
      let randomIdindex = Math.floor(Math.random() * string.length);
      randomId += string[randomIdindex];
    }
    return randomId;
  };

  const [TaskInput, setTaskInput] = useState("");
  const [HourInput, setHourInput] = useState("");

  const [badHour, setBadHour] = useState(0);
  const [entryHours, setEntryHours] = useState(0);

  const [taskList, setTaskList] = useState([
    {
      id: randomIdGenerator(),
      task: "Cook Food",
      hour: 2,
      type: "entry",
    },
  ]);

  const addTask = () => {
    const itemTaskList = {
      id: randomIdGenerator(),
      task: TaskInput,
      hour: HourInput,
      type: "entry",
    };
    TaskInput !== "" && HourInput !== ""
      ? setTaskList([...taskList, itemTaskList])
      : alert("Please Enter the values");
    console.log("CLicked");
  };
  const addItemToList = () => {
    addTask();
    setHourInput("");
    setTaskInput("");
  };
  const swapTask = (id) => {
    // deep copy
    const tempTaskList = [...taskList];

    // shallow copy
    const task = tempTaskList.find((item) => item.id == id);
    task.type = task.type === "entry" ? "bad" : "entry";
    // send updated task list
    setTaskList(tempTaskList);
  };
  const del = (id) => {
    const tempDel = taskList.filter((item) => item.id !== id);
    confirm("Are you sure, you want to delete this task from the list?") &&
      setTaskList(tempDel);
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex  min-w-[70vw] gap-5 md:flex-col sm:flex-col md:items-center sm:items-center">
        <div className="flex flex-col items-center min-h-[50vh] min-w-[30%] w-[40%]">
          <h1 className="text-center mb-4">Not To Do List</h1>
          <InputNotToDoList
            setTaskInput={setTaskInput}
            TaskInput={TaskInput}
            HourInput={HourInput}
            setHourInput={setHourInput}
            addItemToList={addItemToList}
          />
          <NotToDoListResult entryHours={entryHours} badHour={badHour} />
        </div>
        <div className="flex flex-col items-center min-h-[50vh] min-w-[60%] md:w-[100%] sm:w-[100%]">
          <div className="flex justify-between px-5 gap-4 md:w-[100%]">
            <EntryLists
              taskList={taskList}
              swapTask={swapTask}
              del={del}
              setEntryHours={setEntryHours}
            />
            <BadList
              taskList={taskList}
              swapTask={swapTask}
              del={del}
              setBadHour={setBadHour}
              badHour={badHour}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotToDoList;
