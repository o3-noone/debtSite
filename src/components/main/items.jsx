import React from "react";

const UserItems = ({ item, setPayBox, setAddNewPay, setHistory, setUserInfo, setEditUser }) => {

  return (
    <div className="searchItem" key={item.id}>
      <div className="userName">{item.FirstName}</div>
      <div className="userSurname">{item.LastName}</div>
      <div className="userLocation">{item.location}</div>
      <div className="userDebt">{item.debt}</div>
      <div className="userTasks">
        <button className="sendMoney" onClick={()=>{setPayBox(item)}}>
          <i className="fa-solid fa-money-check-dollar"></i>
        </button>
        <button className="getMoney" onClick={()=>{setAddNewPay(item)}}>
          <i className="fa-solid fa-money-bill-wave"></i>
        </button>
        <button className="getSendBtn" onClick={()=>{setHistory(item)}}>
          <i className="fa-solid fa-clock-rotate-left"></i>
        </button>
        <button className="infoUser" onClick={()=>{setUserInfo(item)}}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
        
        <button className="changeUser" onClick={()=>{setEditUser(item)}}>
          <i className="fa-solid fa-user-pen"></i>
        </button>
      </div>
    </div>
  );
};

export default UserItems;
