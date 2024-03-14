import React, { useState } from "react";
import dataLanguage from "../data/dataLanguage";
import { data } from "../data/data";
import NewDebt from "./newDebt";
import PayBox from "./payBox";
import UserItems from "./items";
import ItemNewDebt from "./itemNewDebt";
import Sobiq from "./sobiq";
import Hisobot from "./hisobot";
import History from "./historyTransfer";
import UserInfo from "./userInfo";
import EditUser from "./editUser";
const Main = ({ language, navId }) => {
  const [newDebt, setNewDebt] = useState("");
  const [payBox, setPayBox] = useState("");
  const [addNewPay, setAddNewPay] = useState("");
  const [history, setHistory] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const filterData = data.filter((item) => item.sobiq === "false");
  const [editUser, setEditUser] = useState("");
  return (
    <>
      {navId === "1" ? (
        <>
          <div className="main">
            <div className="newUser">
              <button
                className="addUser"
                onClick={() => setNewDebt("true")}
                id="text4"
              >
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
                  {filterData.map((item) => (
                    <UserItems
                      key={item.id}
                      item={item}
                      language={language}
                      setPayBox={setPayBox}
                      setAddNewPay={setAddNewPay}
                      setHistory={setHistory}
                      setUserInfo={setUserInfo}
                      setEditUser={setEditUser}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : navId === "2" ? (
        <Sobiq language={language} />
      ) : (
        <Hisobot language={language} />
      )}
      {newDebt ? (
        <NewDebt language={language} setNewDebt={setNewDebt} />
      ) : (
        <></>
      )}
      {payBox ? (
        <PayBox language={language} payBox={payBox} setPayBox={setPayBox} />
      ) : (
        <></>
      )}
      {addNewPay ? (
        <ItemNewDebt
          language={language}
          addNewPay={addNewPay}
          setAddNewPay={setAddNewPay}
        />
      ) : (
        <></>
      )}
      {history ? (
        <History
          language={language}
          history={history}
          setHistory={setHistory}
        />
      ) : (
        <></>
      )}
      {userInfo ? (
        <UserInfo userInfo={userInfo} language={language} setUserInfo={setUserInfo} />
      ) : (
        <></>
      )}
      {editUser ? (
        <EditUser editUser={editUser} language={language} setEditUser={setEditUser} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
