import React from "react";
import { useState } from "react";

import InputNotToDoList from "./InputNotToDoList";
import EntryLists from "./EntryLists";
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

  const [TaskInput, setTaskInput] = useState("Task");
  const [HourInput, setHourInput] = useState("Hours");
  const [showEntryList, setShowEntryList] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const itemTaskList = {
      id: randomIdGenerator(),
      task: { TaskInput },
      hour: { HourInput },
      type: "entry",
    };
    setTaskList([...taskList, itemTaskList]);
    setShowEntryList(true);
    console.log("CLicked");
  };
  console.log(taskList);
  return (
    <div>
      <h1 className="text-center mb-4">Not To Do List</h1>
      <InputNotToDoList
        setTaskInput={setTaskInput}
        setHourInput={setHourInput}
        addTask={addTask}
      />
      <EntryLists taskList={taskList} showEntryList={showEntryList} />
      <NotToDoListResult />
    </div>
  );
};

export default NotToDoList;
