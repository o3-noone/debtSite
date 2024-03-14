import React from "react";
import dataLanguage from "../data/dataLanguage";

const History = ({ history, setHistory, language }) => {
    const filtrSet=history.debtTimeAndItem.filter((item)=>item.category==="set")
    const filtrTake=history.debtTimeAndItem.filter((item)=>item.category==="take")
  return (
    <div className="container">
      <div className="historyTransfer">
        <div className="historyBox">
          <div className="historyList">
            <div className="historyItem1">
              <div className="historyTitle">{dataLanguage[`olinganqarzlar${language}`]}</div>
              <div className="itemsTitle">
                <span className="i1span">
                  <i className="fa-solid fa-calendar-day"></i> {dataLanguage[`sana${language}`]}
                </span>
                <span className="i1span">
                  <i className="fa-solid fa-money-bills"></i> {dataLanguage[`miqdor${language}`]}
                </span>
              </div>
              <div className="historyItems items1History">
                {filtrSet.map((item)=>{
                     <div className="historyItem">
                     <p>${item.time}</p><h4>${item.money}</h4>
                   </div>
                })}
              </div>
              <div className="historyInfoDebt">
                <p>{dataLanguage[`jamitolov${language}`]}</p>
                <h4 className="allPayMoney">0</h4>
              </div>
            </div>
            <div className="historyItem2">
              <div className="historyTitle"> {dataLanguage[`tolovlartarixi${language}`]}</div>
              <div className="itemsTitle">
                <span className="i2span">
                  <i className="fa-solid fa-calendar-day"></i>  {dataLanguage[`sana${language}`]}
                </span>
                <span className="i2span">
                  <i className="fa-solid fa-money-bills"></i>  {dataLanguage[`miqdor${language}`]}
                </span>
              </div>
              <div className="historyItems items2History">
              {filtrSet.map((item)=>{
                     <div className="historyItem">
                     <p>${item.time}</p><h4>${item.money}</h4>
                   </div>
                })}
              </div>
              <div className="historyInfo">
                <p> {dataLanguage[`jamitolov${language}`]}</p>
                <h4>0</h4>
              </div>
            </div>
          </div>
        </div>
        <button className="debtInfo">{dataLanguage[`qarzdor${language}`]}</button>
        <div className="exit--btn">
          <button
            onClick={() => {
              setHistory("");
            }}
          >
             {dataLanguage[`yopish${language}`]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
