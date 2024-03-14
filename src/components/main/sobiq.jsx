import React from "react";
import dataLanguage from "../data/dataLanguage";

const Sobiq = ({ language }) => {
  return (
    <div className="main">
      <div className="mainDebtBox">
        <div className="title">
          <h1 id="text10">{dataLanguage[`sobiqTitle${language}`]}</h1>
        </div>
        <div className="usersBox">
          <div className="user1Search">
            <input
              type="search"
              name="search"
              id="search1"
              placeholder="Search"
            />
          </div>
          <div className="searchList">
            <div className="searchHeader">
              <div className="userName">
                {dataLanguage[`ism${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userSurname">
                {dataLanguage[`familiya${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userLocation">
                {dataLanguage[`location${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userDebt">
                {dataLanguage[`qarz${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userTasks">
                {dataLanguage[`amallar${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            <div className="sobiqItems"></div>
          </div>
          <div className="user1Search">
            <input type="number" id="search1" placeholder="Search" defaultValue="5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobiq;
