import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dataLanguage from "../data/dataLanguage";
const Header = ({
  language,
  setLanguage,
  navId,
  setNavId,
  theme,
  setTheme,
}) => {
  const localStore = localStorage.getItem("activeBtn");
  useEffect(() => {
    if (!localStore) {
      localStorage.setItem("activeBtn", "1");
      setNavId("1");
    } else {
      setNavId(localStore);
    }
  }, []);
  const themeLocal = localStorage.getItem("theme");
  useEffect(() => {
    const body = document.querySelector(".body");
    if (themeLocal === "true") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [theme]);

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${language}`);
  }, [language]);

  const setIdLocal = (id) => {
    localStorage.setItem("activeBtn", id);
    setNavId(id);
  };
  const handleChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };
  return (
    <div className="header">
      <div className="logoDiv">
        <div className="logo">
          <a href="#">
            <p id="logoText">{dataLanguage[`logo${language}`]}</p>
          </a>
        </div>
      </div>
      <div className="header-list">
        <div
          className={`headerItem ${localStore === "1" ? "activeBtn" : ""}`}
          onClick={() => setIdLocal("1")}
          id="text1"
        >
          {dataLanguage[`debt${language}`]}
        </div>
        <div
          className={`headerItem ${localStore === "2" ? "activeBtn" : ""}`}
          onClick={() => setIdLocal("2")}
          id="text2"
        >
          {dataLanguage[`baza${language}`]}
        </div>
        <div
          className={`headerItem ${localStore === "3" ? "activeBtn" : ""}`}
          onClick={() => setIdLocal("3")}
          id="text3"
        >
          {dataLanguage[`hisobot${language}`]}
        </div>
      </div>
      <div className="headerBtns">
        <div className="language">
          <select
            name="language"
            id="language"
            value={language}
            onChange={handleChange}
          >
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </div>

        <div className="themeSite">
          <label className="toggle">
            <input
              id="switch"
              className="input"
              onChange={(e) => setTheme(e.target.checked)}
              checked={theme}
              type="checkbox"
            />
            <div className="icon icon--moon">
              <svg
                height="20"
                width="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"></path>
              </svg>
            </div>
            <div className="icon icon--sun">
              <svg
                height="25"
                width="25"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>
        <div className="settingSite">
          <div className="settingIcon">
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
