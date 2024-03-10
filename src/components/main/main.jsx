import React, { useEffect, useState } from "react";
import dataLanguage from "../data/dataLanguage";
import { data } from "../data/data";
const Main = ({ language }) => {
  const [showContainer, setShowContainer] = useState("");
  const [newDebt, setNewDebt] = useState("");
  const addNewDebt = () => {
    setShowContainer("show");
    setNewDebt("show");
  };
  useEffect(() => {
    setNewDebt("show");
  }, [newDebt]);
  return (
    <>
      <div className="main">
        <div className="newUser">
          <button className="addUser" onClick={() => addNewDebt()} id="text4">
            {dataLanguage[`newDebtr${language}`]}{" "}
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="usersBox">
          <div className="user1Search">
            <input
              type="search"
              name="search"
              id="search1"
              placeholder={dataLanguage[`search${language}`]}
            />
          </div>
          <div className="searchList">
            <div className="searchHeader">
              <div className="userName" id="text5">
                {dataLanguage[`ism${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userSurname" id="text6">
                {dataLanguage[`familiya${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userLocation" id="text7">
                {dataLanguage[`location${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userDebt" id="text8">
                {dataLanguage[`qarz${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="userTasks" id="text9">
                {dataLanguage[`amallar${language}`]}{" "}
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            <div className="searchItems">
              {data.map((item) => {
                return (
                  <div className="searchItem" key={item.id}>
                    <div className="userName">{item.FirstName}</div>
                    <div className="userSurname">{item.LastName}</div>
                    <div className="userLocation">{item.location}</div>
                    <div className="userDebt">{item.debt}</div>
                    <div className="userTasks">
                      <button className="sendMoney">
                        <i className="fa-solid fa-money-check-dollar"></i>
                      </button>
                      <button className="getMoney">
                        <i className="fa-solid fa-money-bill-wave"></i>
                      </button>
                      <button className="getSendBtn">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                      </button>
                      <button className="infoUser">
                        <i className="fa-solid fa-circle-info"></i>
                      </button>
                      <button className="changeUser">
                        <i className="fa-solid fa-user-pen"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showContainer ? (
        <>
          <div className="container">
            {newDebt ? (
              <>
                <div className="addNewDebt">
                  <div className="addNewTitle">
                    <p className="addText">Yangi qarzdor qo'shish</p>
                  </div>
                  <div className="addInput">
                    <label className="labelInput">
                      <i className="fa-regular fa-user"></i>
                      <input
                        id="FirstName"
                        type="text"
                        placeholder="Ism"
                        required=""
                      />
                    </label>
                    <label className="labelInput">
                      <i className="fa-solid fa-users"></i>
                      <input
                        id="LastName"
                        type="text"
                        placeholder="Familiya"
                        required=""
                      />
                    </label>
                    <label className="labelInput">
                      <i className="fa-solid fa-phone"></i>
                      <input
                        id="telNumber"
                        type="tel"
                        placeholder="Telefon"
                        required=""
                        defaultValue="+998 9"
                      />
                    </label>
                    <label className="labelInput">
                      <i className="fa-solid fa-house"></i>
                      <input
                        id="location"
                        type="text"
                        placeholder="Manzil"
                        required=""
                      />
                    </label>
                    <label className="labelInput">
                      <i className="fa-solid fa-money-bill-wave"></i>
                      <input
                        id="debtMoney"
                        type="number"
                        placeholder="Olingan qarz"
                        required=""
                      />
                    </label>
                    <label className="labelInput">
                      <i className="fa-solid fa-calendar-days"></i>
                      <input
                        id="dayNum"
                        type="number"
                        placeholder="Qarzni qaytarish vaqti (kunlarda)"
                        required=""
                      />
                    </label>
                    <label className="labelInput">
                      <i className="fa-solid fa-money-check"></i>
                      <input
                        id="getElement"
                        type="text"
                        placeholder="Garovga olingan narsa"
                        required=""
                      />
                    </label>
                    <textarea
                      id="info"
                      className="textArea"
                      placeholder="Qo'shimcha ma'lumot"
                      required=""
                    ></textarea>
                    <div className="flexBtn">
                      <button className="closeBtn">Bekor qilish</button>
                      <button className="sendBtn sendBtn0">Tasdiqlash</button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
