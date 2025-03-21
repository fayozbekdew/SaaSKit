import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DealsIcon,
  SettingsActiveIcon,
  SettingsIcon,
  ToggleIcon,
  UserImage,
} from "../assets";
import { navbarPath } from "../constants/navbar";
import { useState, useEffect } from "react";

function Sidebar() {
  const [activePage, setActivePage] = useState(localStorage.getItem("active"));
  const [toggle, setToggle] = useState(
    !!localStorage.getItem("toggle") || false
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function activeChecker() {
    if (!activePage) {
      localStorage.setItem("active", "/");
      setActivePage("/");
    } else if (pathname != activePage) {
      navigate(activePage);
    }
  }
  function activePageAdd(path) {
    if (activePage != path) {
      localStorage.setItem("active", path);
      setActivePage(path);
      navigate(path);
    }
  }
  function toggleChecker() {
    setToggle((prev) => !prev);
    localStorage.setItem("toggle", toggle);
  }
  useEffect(() => {
    activeChecker();
  }, []);

  return (
    <div
      className={`${
        toggle ? "max-w-[68px] " : "max-w-[256px]"
      } w-full  sidebar-shadow flex flex-col gap-y-6 pt-6`}
    >
      <div
        onClick={() => activePageAdd("/")}
        className={`${
          toggle ? "pl-2" : "pl-5"
        } text-accentBlue font-semibold text-[18px]  cursor-pointer`}
      >
        SaaS
      </div>
      <hr className="text-lightGray" />
      <span className={`${toggle ? "pl-2" : "pl-5"}  flex gap-x-3`}>
        <img
          src={UserImage}
          className="rounded-full w-12 h-12"
          alt="user image"
        />
        {!toggle && (
          <small>
            <h3 className="font-semibold text-[16px]">Sierra Ferguson</h3>
            <p className="text-gray">s.ferguson@gmail.com</p>
          </small>
        )}
      </span>
      <ul className="pl-5 flex flex-col gap-y-4">
        {navbarPath.map((nav) => (
          <small key={nav.href} className="">
            <li
              key={nav.href}
              onClick={() => activePageAdd(nav.href)}
              className={` flex gap-x-2 cursor-pointer`}
            >
              <img
                src={activePage == nav.href ? nav.activeIcon : nav.icon}
                alt=""
              />
              {nav.children ? (
                <>
                  {!toggle && (
                    <p
                      className={`${
                        nav.href == activePage
                          ? "text-accentBlue"
                          : "text-darkText"
                      } text-[17px] font-semibold`}
                    >
                      {nav.title}
                    </p>
                  )}
                </>
              ) : (
                !toggle && (
                  <Link
                    to={nav.href}
                    className={`${
                      nav.href == activePage
                        ? "text-accentBlue"
                        : "text-darkText"
                    } text-[17px] font-semibold`}
                  >
                    {nav.title}
                  </Link>
                )
              )}
            </li>
            <ul className={`${toggle ? "flex flex-col gap-y-2 mt-1" : ""}`}>
              {nav?.children?.map((inner) => (
                <Link
                  to={inner.href}
                  key={inner.href}
                  className={`${activePage == nav.href ? "flex" : "hidden"} ${
                    toggle ? "ml-2" : "ml-7"
                  } gap-x-2 items-center  hover:text-accentBlue`}
                >
                  <img src={inner.icon} className="w-3 h-3" alt="inner icon" />
                  {!toggle && <p className={`text-[15px]`}>{inner.title}</p>}
                </Link>
              ))}
            </ul>
          </small>
        ))}
      </ul>
      <hr className="text-lightGray" />
      <span
        onClick={() => activePageAdd("/settings")}
        className="pl-5 flex gap-2"
      >
        <img
          src={activePage == "/settings" ? SettingsActiveIcon : SettingsIcon}
          alt="settings"
        />
        {!toggle && (
          <Link
            className={`${
              activePage == "/settings" ? "text-accentBlue" : "text-darkText"
            } font-semibold`}
            to="#"
          >
            Settings
          </Link>
        )}
      </span>
      <button
        onClick={() => toggleChecker()}
        className="flex mt-auto mb-6 gap-2 pl-5 items-center"
      >
        <img
          className={`${toggle ? "w-5 h-5" : ""}`}
          src={ToggleIcon}
          alt="togele icons"
        />
        {!toggle && <p>Toggle sidebar</p>}
      </button>
    </div>
  );
}

export default Sidebar;
