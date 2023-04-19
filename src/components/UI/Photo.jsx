import React from "react";
import { useState } from "react";
import styles from "../UserName/user.module.css";
import cn from "classnames";

const Photo = ({ photoChange }) => {
  const [img, setImg] = useState(null);

  function handleImgChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
      photoChange(reader.result);
    };
  }

  return (
    <>
      {img ? (
        <img src={img} alt="" />
      ) : (
        <input
          type="file"
          accept="img/*"
          onChange={handleImgChange}
          id="input__file"
          className={cn(styles.input, styles.input__file)}
        />
      )}
    </>
  );
};

export default Photo;
