import React from "react";
import styles from "./link.module.css";
import cn from "classnames";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdRemoveCircleOutline } from "react-icons/md";
import { getSocialImage } from "./utils";

const Link = ({ onRemoveItem }) => {
  //Блок Link
  const [isEdit, setIsEdit] = useState(false);
  //Редагування по натиску на олівець
  const [penIsEdit, setPenIsEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState("Title");
  const [inputLink, setInputLink] = useState("Link");

  const socialMedia = getSocialImage(inputTitle);
  
  //Табуляція першого інпуту
  function handleInput1KeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      event.target.nextSibling.focus();
    } else if (event.key === "Enter") {
      setIsEdit(false);
      setPenIsEdit(false);
    }
  }
  //Табуляція другого інпуту
  function handleInput2KeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      event.target.previousSibling.focus();
    } else if (event.key === "Enter") {
      setIsEdit(false);
    }
  }
  //Фокус для інпуту
  function handleInputFocus() {
    setIsEdit(!isEdit);
    setTimeout(() => {
      const inputElem = document.getElementById("input1");
      if (inputElem) {
        inputElem.focus();
      }
    }, 0);
  }
  //Прибирає олівець в режимі 'Title'
  function changePenMouseLeave() {
    if (isEdit) {
      setPenIsEdit(true);
    } else {
      setPenIsEdit(false);
    }
  }

  return <div>
    <div
      className={cn(styles.block)}
      onMouseEnter={() => setPenIsEdit(true)}
      onMouseLeave={changePenMouseLeave}
    >
      <div className={cn(styles.block__container)}>
        <div className={cn(styles.block__img)}>{socialMedia}</div>
        {!isEdit ? (
          <a
            href={inputLink}
            className={cn(styles.block__link)}
            target="_blank"
          >
            {inputTitle ? inputTitle : "Title"}
          </a>
        ) : (
          <div className={cn(styles.double__input)}>
            <input
              id="input1"
              type="text"
              value={inputTitle === "Title" ? "" : inputTitle}
              placeholder="social media / title"
              onChange={(e) => setInputTitle(e.target.value)}
              onKeyDown={handleInput1KeyDown}
            />
            <input
              id="input2"
              type="url"
              value={inputLink === "Link" ? "" : inputLink}
              placeholder="link"
              onChange={(e) => setInputLink(e.target.value)}
              onKeyDown={handleInput2KeyDown}
            />
          </div>
        )}
        <div className={cn(styles.change__link)} onClick={handleInputFocus}>
          {penIsEdit && (
            <BsPencilSquare className={cn(styles.change__link_icon)} />
          )}
        </div>
      </div>
      <div className={cn(styles.remove__btn)}>
        <MdRemoveCircleOutline onClick={onRemoveItem} />
      </div>
    </div>
  </div>;
};

export default Link;
