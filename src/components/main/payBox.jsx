import React from "react";
import dataLanguage from "../data/dataLanguage";

const PayBox = ({ setPayBox, payBox, language }) => {
  return (
    <div className="container">
      <div className="payBox">
        <div className="payTitle">
          <p> {dataLanguage[`tolov${language}`]}</p>
          <h4 className="usersName">{payBox.FirstName}</h4>
        </div>
        <div className="payInput">
          <label className="labelInput">
            <i className="fa-solid fa-money-bill-wave"></i>
            <input
              id="payInputId"
              type="number"
              placeholder={dataLanguage[`olinganqarz${language}`]}

              required=""
            />
          </label>
        </div>
        <div className="flexBtn">
          <button
            className="closeBtn"
            onClick={() => {
              setPayBox("");
            }}
          >
            {dataLanguage[`eror${language}`]}
          </button>
          <button className="sendBtn sendBtn1">
            {dataLanguage[`tastiqlash${language}`]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayBox;
