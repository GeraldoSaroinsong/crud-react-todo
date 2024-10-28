"use client";
import { useState } from "react";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import { log } from "console";

const Home = () => {
  // Declare useState
  const [count, setCount] = useState<number>(0); // return [value, (value) => {array[0] = value}]
  // count = array[0], setCount = array[1]

  const [inputValue, setInputValue] = useState<string>("");

  // state for data-form
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // store data
  const [data, setData] = useState<any>([]);

  const onIncrement = () => {
    setCount(count + 1); // Memperbarui data pada state "count" melalui fungsi setCount
  };

  const onHandleInput = (e: any) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  // set value to state for data-form element
  const onHandleAge = (e: any) => {
    setAge(e.target.value);
  };
  const onHandleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onSave = () => {
    // Cara 1
    // const temp = [...data];
    // temp.push({ name, age, email });
    // setData(temp);

    // Cara 2
    setData([...data, { name, age, email }]);
  };

  const printData = () => {
    return data.map((val: any, index: number) => {
      // use map function to create a new table row element
      return (
        <tr key={`${val}-${index}`} className="border border-collapse">
          <td className="text-center border-collapse">{index + 1}</td>
          <td className="text-center border-collapse">{val.name}</td>
          <td className="text-center border-collapse">{val.age}</td>
          <td className="text-center border-collapse">{val.email}</td>
          <td className="text-center border-collapse">
            <button type="button" className="bg-slate-300 p-2 rounded-md">
              Edit
            </button>
            <button type="button" className="bg-red-500 p-2 rounded-md">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="w-1/2 m-auto">
      <h1 className="text-3xl text-center uppercase">Data Management</h1>
      <div className="hidden">
        {/* Display data from state */}
        <h1 className="text-9xl">{count}</h1>
        <button
          type="button"
          className="bg-gray-300 p-2 rounded-md shadow-md"
          onClick={onIncrement}
        >
          Increment
        </button>
        <input
          type="text"
          placeholder="Type something"
          className="p-2 border"
          onChange={onHandleInput}
        />
        <span>{inputValue}</span>
      </div>
      <div id="data-form" className="flex flex-col gap-3">
        <FormInput
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          type="text"
          label="Full Name"
          placeholder="Type your name"
        />
        <FormInput
          onChange={onHandleAge}
          type="number"
          label="Age"
          placeholder="Type your age"
        />
        <FormInput
          onChange={onHandleEmail}
          type="email"
          label="Email"
          placeholder="Type your email"
        />
        <button
          type="button"
          className="bg-slate-300 p-2 rounded-md shadow-md"
          onClick={onSave}
        >
          Save
        </button>
      </div>
      <table className="w-full border border-collapse mt-5">
        <thead>
          <tr>
            <th className="border border-collapse">No</th>
            <th className="border border-collapse">Name</th>
            <th className="border border-collapse">Age</th>
            <th className="border border-collapse">Email</th>
            <th className="border border-collapse">Action</th>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </table>
    </div>
  );
};
export default Home;
