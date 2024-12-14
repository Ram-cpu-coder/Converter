import React from "react";

import InputNotToDoList from "./InputNotToDoList";
import EntryLists from "./EntryLists";
import NotToDoListResult from "./NotToDoListResult";

const NotToDoList = () => {
  return (
    <div>
      <h1 className="text-center mb-4">Not To Do List</h1>
      <InputNotToDoList />
      <EntryLists />
      <NotToDoListResult />
    </div>
  );
};

export default NotToDoList;
