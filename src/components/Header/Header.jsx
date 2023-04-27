import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { FiShare } from "react-icons/fi";

const Header = ({ photo, onClick }) => {
  return (
    <div className={cn(styles.block__header)}>
      <div className={cn(styles.header__photo)}>
        {photo ? <img src={photo} alt="фото" /> : <div/>}
      </div>
      <div className={cn(styles.header__user_name)} />
      <div className={cn(styles.header__link)} onClick={onClick}>
        <FiShare className={cn(styles.header__link_icon)} />
      </div>
    </div>
  );
};

export default Header;
