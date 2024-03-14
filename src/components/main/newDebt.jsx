import React from "react";
import dataLanguage from "../data/dataLanguage";

const NewDebt = ({ setNewDebt, language }) => {
  return (
    <div className="container">
      <div className="addNewDebt">
        <div className="addNewTitle">
          <p className="addText"> {dataLanguage[`newDebtr${language}`]} </p>
        </div>
        <div className="addInput">
          <label className="labelInput">
            <i className="fa-regular fa-user"></i>
            <input
              id="FirstName"
              type="text"
              placeholder={dataLanguage[`ism${language}`]}
              required=""
            />
          </label>
          <label className="labelInput">
            <i className="fa-solid fa-users"></i>
            <input
              id="LastName"
              type="text"
              placeholder={dataLanguage[`familiya${language}`]}
              required=""
            />
          </label>
          <label className="labelInput">
            <i className="fa-solid fa-phone"></i>
            <input
              id="telNumber"
              type="tel"
              required=""
              defaultValue="+998 9"
            />
          </label>
          <label className="labelInput">
            <i className="fa-solid fa-house"></i>
            <input
              id="location"
              type="text"
              placeholder={dataLanguage[`location${language}`]}
              required=""
            />
          </label>
          <label className="labelInput">
            <i className="fa-solid fa-money-bill-wave"></i>
            <input
              id="debtMoney"
              type="number"
              placeholder={dataLanguage[`qarz${language}`]}
              required=""
            />
          </label>
          <label className="labelInput">
            <i className="fa-solid fa-calendar-days"></i>
            <input
              id="dayNum"
              type="number"
              placeholder={dataLanguage[`qarzniqaytar${language}`]}
              required=""
            />
          </label>
          <textarea
            id="info"
            className="textArea"
            placeholder={dataLanguage[`qoshimchamalumot${language}`]}
            required=""
          ></textarea>
          <div className="flexBtn">
            <button className="closeBtn" onClick={() => setNewDebt("")}>
              {dataLanguage[`eror${language}`]}
            </button>
            <button className="sendBtn">
              {" "}
              {dataLanguage[`tastiqlash${language}`]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDebt;
