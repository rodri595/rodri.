import React, { useState, useEffect } from "react";

import { getLocalStorage, setLocalStorage } from "../utilities/LocalStorage";

const Switcher = ({ setisButtonOpen, setisDarkMode }) => {
  const [isopen, setisopen] = useState(false);
  const [isdark, setisdark] = useState(false);

  const darkMode = () => {
    setisopen((prev) => !prev);
    setisButtonOpen((prev) => !prev);
  };
  const darkModeButtonlight = () => {
    if (isdark) {
      setisdark(false);
      setisDarkMode(false);
    }
  };
  const darkModeButtondark = () => {
    if (!isdark) {
      setisdark(true);
      setisDarkMode(true);
    }
  };

  useEffect(() => {
    if (getLocalStorage("DarkMode") === "on") {
      setisdark(true);
      setisDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isdark) {
      setLocalStorage("DarkMode", "on");
    } else {
      setLocalStorage("DarkMode", "off");
    }
  }, [isdark]);
  return (
    <div className="position-fixed-right mode-switcher-panel-wrapper">
      <div className="position-relative mode-switcher-panel">
        <span className="text"> Dark Mode </span>
        <div className="buttons">
          <button
            onClick={() => {
              darkModeButtonlight();
            }}
            className={
              isdark ? "false switcher-btn" : "false switcher-btn active"
            }
          >
            Light
          </button>
          <button
            onClick={() => {
              darkModeButtondark();
            }}
            className={isdark ? "switcher-btn active" : "switcher-btn"}
          >
            dark
          </button>
        </div>
        <button
          className={
            isopen
              ? "switcher-minimize-button open"
              : "switcher-minimize-button"
          }
          onClick={() => darkMode()}
        >
          <i className="icon icon-small-left"></i>
        </button>
      </div>
    </div>
  );
};

export default Switcher;
