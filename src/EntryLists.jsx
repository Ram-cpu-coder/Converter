import React, { useState } from "react";
import "flowbite";
import "./App.css";

const EntryLists = ({ taskList, swapTask, del, setEntryHours }) => {
  const entryList = taskList.filter((item) => item.type == "entry");
  const GoodHours = entryList.map((item) => {
    return item.hour;
  });
  const total = GoodHours.reduce((item, acc) => {
    return item + acc;
  }, 0);

  setEntryHours(total);
  return (
    <div className="flex flex-col min-h-[300px] min-w-[50%]">
      <h1 className="text-center font-bold text-3xl pb-1">Entry List</h1>
      <hr className="pb-3" />
      <table className="min-h-[60px] h-[auto] w-[100%]">
        <tbody id="entry-list" className="flex flex-col">
          {entryList != [] ? (
            entryList.map((item, index) => {
              return (
                <tr className="flex items-center justify-between p-2 hover:bg-gray-300  ">
                  <th className="text-lg">{index + 1}</th>
                  <td className=" border-0 text-lg max-w-[100px] h-[30px] break-words text-start">
                    {item.task}
                  </td>
                  <td className="border-0 text-lg">{item.hour}</td>
                  <td className="border-0 flex gap-1">
                    <button
                      type="button"
                      className="p-2"
                      onClick={() => {
                        del(item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="p-2"
                      onClick={() => {
                        swapTask(item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="border text-5xl">No data</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntryLists;
