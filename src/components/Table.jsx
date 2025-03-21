import React from "react";
import { useState } from "react";
import { DeleteIcon } from "../assets";

function Table({ thead, tbody, action }) {
  const [checkedUserHash, setCheckedUserHash] = useState(new Map());
  function checkerUser(id) {
    setCheckedUserHash((prevCheckedUsers) => {
      const newCheckedUsers = new Map(prevCheckedUsers);
      if (newCheckedUsers.has(id)) {
        newCheckedUsers.delete(id);
      } else {
        newCheckedUsers.set(id, true);
      }
      return newCheckedUsers;
    });
  }
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-white text-gray text-sm leading-normal">
              <th className="py-3 px-6 text-left">
                <input
                  type="checkbox"
                  checked={checkedUserHash.size}
                  onChange={() => {
                    if (checkedUserHash.size > 0) {
                      setCheckedUserHash(new Map());
                    } else {
                      tbody.forEach((element) => {
                        checkerUser(element.id);
                      });
                    }
                  }}
                  className="accent-blue-500"
                />
              </th>
              {checkedUserHash.size == 0 ? (
                thead.map((head) => (
                  <th key={head} className="py-3 px-6 text-left">
                    {head}
                  </th>
                ))
              ) : (
                <th className="flex items-center gap-x-4 mt-[20px] translate-y-[-10px]">
                  <p className="text-darkText">
                    {checkedUserHash.size} selected
                  </p>
                  <img
                    onClick={() => action([...checkedUserHash.keys()])}
                    className="w-4 h-4 cursor-pointer"
                    src={DeleteIcon}
                    alt="delete icon"
                  />
                </th>
              )}
            </tr>
          </thead>
          <tbody className="text-gray text-sm font-light">
            {tbody.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  checkedUserHash.has(user.id) ? "bg-[#f2fafd]" : ""
                } border-b border-lightGray hover:bg-gray-50 transition duration-300 ease-in-out cursor-pointer hover:shadow-md `}
              >
                <td className="py-3 px-6">
                  <input
                    onChange={() => checkerUser(user?.id)}
                    type="checkbox"
                    checked={checkedUserHash.has(user?.id)}
                    className="accent-blue-500"
                  />
                </td>

                {Object.entries(user).map(([key, value], index) =>
                  key == "id" ? null : key !== "fullname" ? (
                    <td className="py-3 px-6">{value}</td>
                  ) : (
                    <td className="py-3 px-6 flex text-darkText font-semibold items-center gap-2">
                      <img
                        src={`https://i.pravatar.cc/40?img=2`}
                        alt={user.fullname}
                        className="w-8 h-8 rounded-full"
                      />
                      {user.fullname}
                    </td>
                  )
                )}
                {/* <td className="py-3 px-6">{user.company}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6">{user.forecast}</td>
                <td className="py-3 px-6">{user.activity}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
