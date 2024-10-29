"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface IFormInput {
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  ref?: any;
}

const FormInput: React.FC<IFormInput> = ({
  type,
  label,
  placeholder,
  onChange,
  ref,
}) => {
  if (type === "password") {
    const [status, setStatus] = useState<boolean>(false);

    const reveal = () => {
      setStatus(!status);
    };

    return (
      <div className="flex flex-col gap-2">
        <label className="font-semibold">{label}</label>
        <div className="flex flex-row relative">
          <input
            ref={ref}
            type={status ? "text" : "password"}
            placeholder={placeholder}
            className="border border-gray-300 p-2 rounded-md shadow-md bg-slate-100 w-full"
            onChange={onChange}
          />
          <button
            className="p-2 bg-white rounded-md shadow-md absolute right-1 top-1"
            onClick={reveal}
          >
            {!status ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-md shadow-md bg-slate-100"
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
