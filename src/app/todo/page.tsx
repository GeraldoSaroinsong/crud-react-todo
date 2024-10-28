"use client";

import { useState } from "react";
import FormInput from "@/components/FormInput";

const Todo = () => {
  // store task
  const [task, setTask] = useState<string>("");
  // store data
  const [data, setData] = useState<any>([]);
  // store checkbox status
  const [doneCount, setDoneCount] = useState<number>(0);

  // save task function
  const saveTask = () => {
    setData([...data, { task, isDone: false }]);
  };

  // toggle checkbox status
  const toggleStatus = (index: number) => {
    const newData = [...data];
    newData[index].isDone = !newData[index].isDone;
    setData(newData);

    // update completed task count
    // const done = newData.filter((val: any) => val.isDone).length;
    setDoneCount(newData.filter((val: any) => val.isDone).length);
  };

  // delete task function
  const deleteTask = (index: number) => {
    const newData = data.filter((val: any, idx: number) => idx !== index);
    setData(newData);

    // update completed task count
    // const done = newData.filter((val: any) => val.isDone).length;
    setDoneCount(newData.filter((val: any) => val.isDone).length);
  };

  // print task data
  const printData = () => {
    return data.map((val: any, index: number) => {
      return (
        <tr key={`${val}-${index}`}>
          <td className="text-center">
            <input
              type="checkbox"
              checked={val.isDone}
              onChange={() => toggleStatus(index)}
            />
          </td>
          <td className="text-center">{val.task}</td>
          <td>
            <button
              type="button"
              className="p-2 bg-red-500 rounded-md shadow-md"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="w-1/2 m-auto">
      <h1 className="text-center font-bold text-3xl">To Do List</h1>
      <table className="w-full divide-y divide-gray-200">{printData()}</table>
      <h2 className="text-center font-semibold text-2xl">Done : {doneCount}</h2>
      <FormInput
        onChange={(e: any) => {
          setTask(e.target.value);
        }}
        type="text"
        label="Add New Task"
        placeholder="Insert Task"
      />
      <button
        onClick={saveTask}
        type="button"
        className="w-fit p-2 bg-slate-400 rounded-md shadow-md mt-3"
      >
        Add Task
      </button>
    </div>
  );
};
export default Todo;
