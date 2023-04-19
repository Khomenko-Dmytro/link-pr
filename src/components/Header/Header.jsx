import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { useState } from "react";
import { FiShare } from "react-icons/fi";
import Photo from "../UI/Photo";

const Header = () => {
  const [photo, setPhoto] = useState("");

  return (
    <div className={cn(styles.block__header)}>
      <div className={cn(styles.header__photo)}>
        <Photo />
      </div>
      <div className={cn(styles.header__user_name)}></div>
      <div className={cn(styles.header__link)}>
        <FiShare className={cn(styles.header__link_icon)} />
      </div>
    </div>
  );
};

export default Header;
