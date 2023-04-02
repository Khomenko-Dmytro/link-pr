import React from "react";
import "./style.css";
import { useEffect } from "react";
import { FiShare } from "react-icons/fi";

const Header = () => {
  return (
    <div className="block__header">
      <div className="header__photo"></div>
      <div className="header__user_name"></div>
      <div className="header__link">
        <FiShare className="header__link_icon" />
      </div>
    </div>
  );
};

export default Header;
