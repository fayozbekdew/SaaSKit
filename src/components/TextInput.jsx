import React from "react";

function TextInput({ placeholder, label }) {
  return (
    <label className="flex flex-col gap-y-1">
      <p className="text-sm">{label}</p>
      <input
        className="border-b-2 border-iconGray placeholder:text-darkText outline-none pl-1"
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
}

export default TextInput;
