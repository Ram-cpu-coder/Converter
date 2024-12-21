import React from "react";
import { useState } from "react";

import InputNotToDoList from "./InputNotToDoList";
import EntryLists from "./EntryLists";
import BadList from "./BadList";
import DelToast from "../public/assets/DelToast";
import AddToast from "../public/assets/AddToast";
import MovedToast from "../public/assets/MovedToast";
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

  const [movedToast, setMovedToast] = useState(false);
  const [taskModified, setTaskModified] = useState("");
  const [delToast, setDelToast] = useState(false);
  const [addToast, setAddToast] = useState(false);
  const [addedTask, setAddedTask] = useState("");
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
    setAddedTask(TaskInput);
  };
  const addItemToList = () => {
    addTask();
    setHourInput("");
    setTaskInput("");
    setAddToast(true);
    setTimeout(() => {
      setAddToast(false);
    }, 500);
  };
  const swapTask = (id) => {
    // deep copy
    const tempTaskList = [...taskList];

    // shallow copy
    const task = tempTaskList.find((item) => item.id == id);
    task.type = task.type === "entry" ? "bad" : "entry";
    setTaskModified(task.task);
    // send updated task list
    setTaskList(tempTaskList);

    setMovedToast(true);
    setTimeout(() => {
      setMovedToast(false);
    }, 500);
  };
  const del = (id) => {
    const tempDel = taskList.filter((item) => item.id !== id);
    const tempTaskList = [...taskList];

    // shallow copy
    const task = tempTaskList.find((item) => item.id == id);
    setTaskModified(task.task);
    confirm("Are you sure, you want to delete this task from the list?") &&
      setTaskList(tempDel);
    setDelToast(true);
    setTimeout(() => {
      setDelToast(false);
    }, 500);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center min-h-[90vh] min-w-[70vw] gap-3">
        <div className="flex flex-col items-center h-[auto] min-w-[30%] w-[50%]">
          <h1 className="text-center mb-4 text-5xl font-bold">
            Not To Do List
          </h1>
          <InputNotToDoList
            setTaskInput={setTaskInput}
            TaskInput={TaskInput}
            HourInput={HourInput}
            setHourInput={setHourInput}
            addItemToList={addItemToList}
          />
        </div>
        <div className="flex flex-col items-center h-[auto] min-w-[100%]">
          <div className="flex justify-between px-5 gap-4 w-[100%]">
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
          <NotToDoListResult entryHours={entryHours} badHour={badHour} />
        </div>
        <MovedToast movedToast={movedToast} taskModified={taskModified} />
        <DelToast delToast={delToast} taskModified={taskModified} />
        <AddToast addToast={addToast} addedTask={addedTask} />
      </div>
    </div>
  );
};

export default NotToDoList;
