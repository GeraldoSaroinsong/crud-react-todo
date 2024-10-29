"use client";

import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState<any>({});
  const [count, setCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  // Model penggunaan useEffect
  // syntax : useEffect(callbackFn, dependencies?[])
  // 1. useEffect hanya akan menjalankan fungsi callback saat awalan render (saat halaman pertama kali diload)
  useEffect(() => {
    alert("use effect runs on first load");
  }, []);

  // 2. useEffect akan menjalankan fungsi callback setiap kali ada state yang berubah
  useEffect(() => {
    alert("use effect runs on every state update");
  });

  // 3. useEffect hanya akan menjalankan fungsi callback jika state yang ditentukan berubah
  useEffect(() => {
    alert("use effect only runs when state of 'count' changes");
  }, [count]);

  return (
    <div>
      <h1>List Page</h1>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="uppercase border p-2"
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => setIsTrue(!isTrue)}
        className="uppercase border p-2"
      >
        {isTrue ? "true" : "false"}
      </button>
    </div>
  );
};
export default List;
