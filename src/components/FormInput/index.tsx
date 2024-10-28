import React from "react";

interface IFormInput {
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

const FormInput: React.FC<IFormInput> = ({
  type,
  label,
  placeholder,
  onChange,
}) => {
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
