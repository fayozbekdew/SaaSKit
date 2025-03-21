import React from "react";

function Select({ options, action = () => {} }) {
  return (
    <select
      onChange={(e) => action(e.target.value)}
      className="outline-none bg-transparent border-b-2 border-iconGray text-accentBlue border-none"
    >
      {options.map((el) => (
        <option key={el} className="" value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default Select;
