import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";

const Footer = ({ onClick }) => {
  return (
    <div className={cn(styles.block__footer)}>
      <div
        id="mini-footer"
        className={cn(styles.block__footer_block)}
        onClick={onClick}
      >
        +
      </div>
    </div>
  );
};

export default Footer;
