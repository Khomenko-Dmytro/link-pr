import React from "react";
import { useState, useEffect } from "react";
import styles from "./user.module.css";
import stylesHeader from "../Header/header.module.css";
import cn from "classnames";

const UserName = (props) => {
  const [user, setUser] = useState(false);
  const [userValue, setUserValue] = useState("user_name");

  useEffect(() => {
    if (userValue === null && userValue === "user_name") {
      document.querySelectorAll(
        `.${stylesHeader.header__user_name}`
      ).innerHTML = "user_name";
    } else {
      document.querySelectorAll(
        `.${stylesHeader.header__user_name}`
      ).innerHTML = "@" + `${userValue}`;
    }
  }, [userValue]);

  function handleKey(e) {
    if (e.key === "Enter") {
      setUser(false);
      setUserValue(userValue);
    }
  }

  return (
    <div className={cn(styles.top__block)}>
      <div className={cn(styles.photo)}></div>
      <div className={cn(styles.title)} onClick={() => setUser(true)}>
        @
        {!user ? (
          <span>{userValue}</span>
        ) : (
          <input
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
            onBlur={() => setUser(false)}
            onKeyDown={handleKey}
          />
        )}
      </div>
    </div>
  );
};

export default UserName;
