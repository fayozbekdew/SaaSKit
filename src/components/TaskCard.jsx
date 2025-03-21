import React from "react";
import { DeleteIcon, EditIcon } from "../assets";

function TaskCard({ title, type, due, status, userName, userImg }) {
  return (
    <div
      style={{ boxShadow: "0px 2px 10px 0px #00000014" }}
      className="group p-3 flex flex-col gap-y-3 "
    >
      <div className="flex justify-between">
        <span className="flex flex-col gap-y-1">
          <h3 className="text-base font-semibold tracking-wide">{title}</h3>
          <small className="text-darkText text-sm flex items-center gap-x-1">
            <p className="text-gray">Due date:</p> {due}
          </small>
        </span>
        <p className="text-gray ">{type}</p>
      </div>
      <div className="flex justify-between items-end">
        <span className="flex items-center gap-x-2">
          <img className="rounded-full w-6 h-6" src={userImg} alt="" />
          <p className="text-tableLight">{userName}</p>
        </span>
        <small className="flex items-center gap-x-2">
          <small className=" hidden gap-x-2 group-hover:flex items-center">
            <img className="cursor-pointer" src={EditIcon} alt="edit" />
            <img className="cursor-pointer" src={DeleteIcon} alt="delete" />
          </small>
          <button
            className={`${
              status == "Ended"
                ? "bg-red"
                : status == "Completed"
                ? "bg-green"
                : "bg-yellow"
            } w-24 h-6 rounded-md p-2 text-sm text-white flex items-center justify-center font-medium`}
          >
            {status}
          </button>
        </small>
      </div>
    </div>
  );
}

export default TaskCard;
