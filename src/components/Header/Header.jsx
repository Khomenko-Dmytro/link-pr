import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { useEffect } from "react";
import { FiShare } from "react-icons/fi";

const Header = () => {
  return (
    <div className={cn(styles.block__header)}>
      <div className={cn(styles.header__photo)}></div>
      <div className={cn(styles.header__user_name)}></div>
      <div className={cn(styles.header__link)}>
        <FiShare className={cn(styles.header__link_icon)} />
      </div>
    </div>
  );
};

export default Header;
