import React from "react";

const BadList = ({ taskList, swapTask, del, setBadHour, badHour }) => {
  const badList = taskList.filter((item) => item.type == "bad");
  const summationBadList = badList.map((item) => {
    return item.hour;
  });

  const sum = summationBadList.reduce((item, acc) => {
    return item + acc;
  }, 0);
  setBadHour(sum);

  return (
    <div className="flex flex-col justify-strech min-h-[300px] min-w-[50%]">
      <h1 className="text-center font-bold text-3xl pb-1">Bad List</h1>
      <hr className="pb-3" />
      <table className="mb-2 min-h-[60px] w-[100%]">
        <tbody id="bad-list" className="flex flex-col">
          {badList.map((item, index) => {
            return (
              <tr
                className="flex items-center justify-between p-2 border hover:bg-gray-300"
                key={item.id}
              >
                <th scope="row" className="fs-5">
                  {index + 1}
                </th>
                <td className="border-0 fs-5 max-w-[100px]">{item.task}</td>
                <td className="border-0 fs-5">{item.hour}</td>
                <td className="border-0 flex gap-1">
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
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="min-w-[100%] border p-4 rounded-lg bg-[#5BC0DE]">
        You could have saved {badHour} hrs!
      </div>
    </div>
  );
};

export default BadList;
