import React from "react";

function Select({ options }) {
  return (
    <select className="outline-none bg-transparent text-accentBlue border-none">
      {options.map((el) => (
        <option key={el} className="" value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default Select;
