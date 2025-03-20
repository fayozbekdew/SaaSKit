import { NotificationIcon, SearchIcon } from "../assets";
import { useState } from "react";

function Navbar() {
  const [notification, setNotification] = useState(true);
  return (
    <div className="h-16 relative">
      <input
        type="text"
        placeholder="Global search"
        className="placeholder:text-gray outline-none w-full h-full pl-16"
      />
      <img
        className="absolute left-10 top-[50%] translate-y-[-50%] "
        src={SearchIcon}
        alt="search icon"
      />
      <span className="absolute right-10 top-[50%] translate-y-[-50%]">
        <small className="flex items-start justify-end">
          <img
            className="w-6 h-6"
            src={NotificationIcon}
            alt="notification icon"
          />
          {notification ? (
            <small className="bg-red flex w-3 h-3 rounded-full absolute"></small>
          ) : null}
        </small>
      </span>
    </div>
  );
}

export default Navbar;
