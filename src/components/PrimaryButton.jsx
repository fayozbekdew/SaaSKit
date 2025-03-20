import React from "react";

function PrimaryButton({ title, disabled }) {
  return (
    <button
      className={`${
        disabled
          ? "read-only: cursor-not-allowed bg-iconGray hover:bg-iconGray"
          : ""
      } bg-accentBlue text-white w-40 h-10 rounded hover:bg-[#34AFF9]  transition duration-300 ease-in-out`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
