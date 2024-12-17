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

  const [TaskInput, setTaskInput] = useState("Task");
  const [HourInput, setHourInput] = useState("Hours");
  const [showEntryList, setShowEntryList] = useState(true);

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
    setTaskList([...taskList, itemTaskList]);
    setShowEntryList(true);
    console.log("CLicked");
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
    <div>
      <h1 className="text-center mb-4">Not To Do List</h1>
      <InputNotToDoList
        setTaskInput={setTaskInput}
        setHourInput={setHourInput}
        addTask={addTask}
      />
      <div className="flex justify-between items-start px-5 gap-2">
        <EntryLists
          taskList={taskList}
          showEntryList={showEntryList}
          swapTask={swapTask}
          del={del}
          setEntryHours={setEntryHours}
        />
        <BadList
          taskList={taskList}
          showEntryList={showEntryList}
          swapTask={swapTask}
          del={del}
          setBadHour={setBadHour}
          badHour={badHour}
        />
      </div>
      <NotToDoListResult entryHours={entryHours} badHour={badHour} />
    </div>
  );
};

export default NotToDoList;
