import cn from "classnames";
import React from "react";
import { useState } from "react";
import styles from "./info.module.css";

const Info = ({ onClick }) => {
  return (
    <div className={cn(styles.wrapper)} onClick={onClick}>
      <div className={cn(styles.window)}></div>
    </div>
  );
};

export default Info;
