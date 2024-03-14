import React from "react";
import dataLanguage from "../data/dataLanguage";

const UserInfo = ({userInfo, setUserInfo, language}) => {
  return (
    <div className="container">
      <div class="InfoUser">
        <div class="infoImg">
          <i class="fa-regular fa-circle-user"></i>
        </div>
        <div class="userInfo">
          <div class="userTitle">
            <h4>
              {userInfo.FirstName} {userInfo.LastName}
            </h4>
            <div class="user">
              <i class="fa-solid fa-phone"></i>
              <p>{userInfo.PhoneNumber}</p>
            </div>
            <div class="user">
              <i class="fa-solid fa-home"></i>
              <p>{userInfo.location}</p>
            </div>
            <div class="user">
              <i class="fa-solid fa-id-card"></i>
              <p>{userInfo.take}</p>
            </div>
            <div class="user">
              <i class="fa-solid fa-money-bill-wave"></i>
              <p>{userInfo.debt}</p>
            </div>
            <div class="user">
              <i class="fa-solid fa-calendar"></i>
              <p>{userInfo.time}</p>
            </div>
            <div class="user">
              <i class="fa-solid fa-circle-info"></i>
              <p>{dataLanguage[`qoshimchamalumot${language}`]}: {" "} {userInfo.info}</p>
            </div>
            <div class="exit-btn">
              <button onClick={()=>{setUserInfo("")}}>{dataLanguage[`yopish${language}`]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
