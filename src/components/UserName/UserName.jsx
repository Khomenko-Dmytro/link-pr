import React from "react";
import { useState, useEffect } from "react";
import styles from "./user.module.css";
import stylesHeader from "../Header/header.module.css";
import cn from "classnames";
import Photo from "../UI/Photo";

const UserName = ({ onPhotoChange }) => {
  const [user, setUser] = useState(false);
  const [userValue, setUserValue] = useState("user_name");

  //Дублювання User_Name в Header
  useEffect(() => {
    if (userValue === null && userValue === "user_name") {
      document.querySelector(`.${stylesHeader.header__user_name}`).innerHTML =
        "user_name";
    } else {
      document.querySelector(`.${stylesHeader.header__user_name}`).innerHTML =
        "@" + `${userValue ? userValue : "user_name"}`;
    }
  }, [userValue]);

  //Кінець корегування по ентнеру
  function handleKeyEnter(e) {
    if (e.key === "Enter") {
      setUser(false);
      setUserValue(userValue);
    }
  }
  //Фокус для інпуту
  function inputFocus() {
    setUser(true);
    setTimeout(() => {
      const inputElem = document.getElementById("input1");
      if (inputElem) {
        inputElem.focus();
      }
    }, 0);
  }

  return (
    <div className={cn(styles.top__block)}>
      <div className={cn(styles.photo)}>
        <Photo onPhotoChange={(e) => onPhotoChange(e)} />
      </div>
      <div className={cn(styles.title)} onClick={inputFocus}>
        @
        {!user ? (
          <span>{userValue ? userValue : "user_name"}</span>
        ) : (
          <input
            id="input1"
            value={userValue === "user_name" ? "" : userValue}
            placeholder="user_name"
            onChange={(e) => setUserValue(e.target.value)}
            onBlur={() => setUser(false)}
            onKeyDown={handleKeyEnter}
          />
        )}
      </div>
    </div>
  );
};

export default UserName;
