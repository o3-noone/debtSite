import React from "react";
import dataLanguage from "../data/dataLanguage";

const ItemNewDebt = ({ language, addNewPay, setAddNewPay }) => {
  return (
    <div className="container">
      <div class="newDebtBox">
        <div class="payTitle">
          <p>{dataLanguage[`newDebtr${language}`]}</p>
          <h4 class="usersName2">{addNewPay.FirstName}</h4>
        </div>
        <div class="payInput">
          <label class="labelInput">
            <i class="fa-solid fa-coins"></i>
            <input
              id="newDebtId"
              type="number"
              placeholder={dataLanguage[`yangiqarz${language}`]}
              required=""
            />
          </label>
        </div>
        <div class="payInput">
          <label class="labelInput">
            <i class="fa-regular fa-calendar-plus"></i>
            <input
              id="newDebtDay"
              type="number"
              placeholder={dataLanguage[`qarzniqaytar${language}`]}
              required=""
            />
          </label>
        </div>
        <div class="flexBtn">
          <button
            class="closeBtn"
            onClick={() => {
              setAddNewPay("");
            }}
          >
            {dataLanguage[`eror${language}`]}
          </button>
          <button class="sendBtn newDebtBtn">
            {dataLanguage[`tastiqlash${language}`]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemNewDebt;
