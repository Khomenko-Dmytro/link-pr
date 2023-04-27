import cn from "classnames";
import React from "react";
import { useState } from "react";
import styles from "./info.module.css";
import Ihor from "./Igor.jpg";
import Dmytro from "./Dmytro.jpg";

const Info = ({ onClick }) => {
  return (
    <div className={cn(styles.wrapper)} onClick={onClick}>
      <div className={cn(styles.window)}>
        <div className={cn(styles.flexbox__container)}>
          <h4>About us:</h4>
          <div className={cn(styles.ihor__item)}>
            <div className={cn(styles.ihor__photo)}>
              <img src={Ihor} alt="фото" />
            </div>
            <div className={cn(styles.ihor__link)}>
              <a href="https://www.instagram.com/ipidstrela/" target="_blank">
                Ihor Pidstrela
              </a>
            </div>
          </div>
          <div className={cn(styles.dmytro__item)}>
            <div className={cn(styles.dmytro__photo)}>
              <img src={Dmytro} alt="" />
            </div>
            <div className={cn(styles.dmytro__link)}>
              <a href="https://www.instagram.com/seb1us/" target="_blank">
                Dmytro Khomenko
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
