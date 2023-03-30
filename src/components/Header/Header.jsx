import React from "react";
import "./style.css";
import { useEffect } from "react";

// const userinfo = [{ id: Date.now(), name: "User", isEdit: false }];

const Header = () => {
  return (
    <div className="block__header">
      <div className="header__photo"></div>
      <div className="header__user_name"></div>
      <div className="header__link"></div>
    </div>
  );
};

export default Header;
