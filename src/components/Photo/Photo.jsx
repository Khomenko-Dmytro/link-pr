import React from "react";
import { useState } from "react";
import cn from "classnames";
import styles from "./Photo.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineAddAPhoto } from "react-icons/md";

const Photo = ({ onPhotoChange }) => {
  const [img, setImg] = useState(null);

  function handleImgChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
      onPhotoChange(reader.result);
    };
  }

  return (
    <>
      {img ? (
        <img src={img} alt="" />
      ) : (
        <>
          <input
            type="file"
            accept="img/*"
            onChange={handleImgChange}
            id="input__file"
            className={cn(styles.input, styles.input__file)}
          />
          <div className={cn(styles.wrapper)}>
            <label
              htmlFor="input__file"
              className={cn(styles.input__file_button)}
            >
              <BsPersonCircle className={cn(styles.input__file_btn)} />
            </label>
          </div>
        </>
      )}
    </>
  );
};

export default Photo;
