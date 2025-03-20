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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function activeChecker() {
    if (!activePage) {
      localStorage.setItem("active", "/");
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
  useEffect(() => {
    activeChecker();
  }, []);

  return (
    <div className="w-full max-w-[256px] sidebar-shadow flex flex-col gap-y-6 pt-6">
      <div
        onClick={() => activePageAdd("/")}
        className="text-accentBlue font-semibold text-[18px] pl-5 cursor-pointer"
      >
        SaaS Kit
      </div>
      <hr className="text-lightGray" />
      <span className="pl-5 flex gap-x-3">
        <img
          src={UserImage}
          className="rounded-full w-12 h-12"
          alt="user image"
        />
        <small>
          <h3 className="font-semibold text-[16px]">Sierra Ferguson</h3>
          <p className="text-gray">s.ferguson@gmail.com</p>
        </small>
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
                  <p
                    className={`${
                      nav.href == activePage
                        ? "text-accentBlue"
                        : "text-darkText"
                    } text-[17px] font-semibold`}
                  >
                    {nav.title}
                  </p>
                </>
              ) : (
                <Link
                  to={nav.href}
                  className={`${
                    nav.href == activePage ? "text-accentBlue" : "text-darkText"
                  } text-[17px] font-semibold`}
                >
                  {nav.title}
                </Link>
              )}
            </li>
            <ul>
              {nav?.children?.map((inner) => (
                <li
                  key={inner.href}
                  className={`${
                    activePage == nav.href ? "flex" : "hidden"
                  } gap-x-2 items-center ml-7 hover:text-accentBlue`}
                >
                  <img src={inner.icon} className="w-3 h-3" alt="inner icon" />
                  <Link className={`text-[15px]`} to={inner.href}>
                    {inner.title}
                  </Link>
                </li>
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
        <Link
          className={`${
            activePage == "/settings" ? "text-accentBlue" : "text-darkText"
          } font-semibold`}
          to="#"
        >
          Settings
        </Link>
      </span>
      <button className="flex mt-auto mb-6 gap-2 pl-5 items-center">
        <img src={ToggleIcon} alt="togele icons" />
        <p>Toggle sidebar</p>
      </button>
    </div>
  );
}

export default Sidebar;
