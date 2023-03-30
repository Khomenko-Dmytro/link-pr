import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

const UserName = (props) => {
  const [user, setUser] = useState(false);
  const [userValue, setUserValue] = useState("user_name");

  useEffect(() => {
    if (userValue === null && userValue === "user_name") {
      document.querySelector(".header__user_name").innerHTML = "user_name";
    } else {
      document.querySelector(".header__user_name").innerHTML =
        "@" + `${userValue}`;
    }
  }, [userValue]);

  function handleKey(e) {
    if (e.key === "Enter") {
      setUser(false);
      setUserValue(userValue);
    }
  }

  return (
    <div className="top__block">
      <div className="photo"></div>
      <div className="title" onClick={() => setUser(true)}>
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
