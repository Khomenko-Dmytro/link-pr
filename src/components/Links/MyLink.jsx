import React from "react";
import styles from "./link.module.css";
import cn from "classnames";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdRemoveCircleOutline } from "react-icons/md";
import facebook from "../UI/icons/facebook.png";
import instagram from "../UI/icons/instagram.png";
import twitter from "../UI/icons/twitter.png";
import youtube from "../UI/icons/youtube.png";
import soundcloud from "../UI/icons/soundcloud.png";
import linkedin from "../UI/icons/linkedin.png";
import pinterest from "../UI/icons/pinterest.png";
import reddit from "../UI/icons/reddit.png";
import telegram from "../UI/icons/telegram.png";
import tiktok from "../UI/icons/tiktok.png";

function id() {
  let date = Date.now();
  let random = Math.random().toString(36).substr(2);
  return date + random;
}

const MyLink = (props) => {
  const [posts, setPosts] = useState([
    {
      id: id(),
      title: "Title",
      site: "link",
      isEdit: false,
    },
  ]);
  const icons = [
    instagram,
    facebook,
    youtube,
    twitter,
    soundcloud,
    linkedin,
    pinterest,
    reddit,
    telegram,
    tiktok,
  ];

  const [isEdit, setIsEdit] = useState(posts.isEdit);
  const [penIsEdit, setPenIsEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState("title");
  const [inputLink, setInputLink] = useState("link");

  function changePenColor(e) {
    if (isEdit) {
      setPenIsEdit(true);
    } else {
      setPenIsEdit(false);
    }
  }

  let socialMedia;
  if (inputTitle.toLowerCase() === "instagram") {
    socialMedia = <img src={icons[0]} alt="instagram" />;
  } else if (inputTitle.toLowerCase() === "facebook") {
    socialMedia = <img src={icons[1]} alt="facebook" />;
  } else if (inputTitle.toLowerCase() === "youtube") {
    socialMedia = <img src={icons[2]} alt="youtube" />;
  } else if (inputTitle.toLowerCase() === "twitter") {
    socialMedia = <img src={icons[3]} alt="twitter" />;
  } else if (inputTitle.toLowerCase() === "soundcloud") {
    socialMedia = <img src={icons[4]} alt="soundcloud" />;
  } else if (inputTitle.toLowerCase() === "linkedin") {
    socialMedia = <img src={icons[5]} alt="linkedin" />;
  } else if (inputTitle.toLowerCase() === "pinterest") {
    socialMedia = <img src={icons[6]} alt="pinterest" />;
  } else if (inputTitle.toLowerCase() === "reddit") {
    socialMedia = <img src={icons[7]} alt="reddit" />;
  } else if (inputTitle.toLowerCase() === "telegram") {
    socialMedia = <img src={icons[8]} alt="telegram" />;
  } else if (inputTitle.toLowerCase() === "tiktok") {
    socialMedia = <img src={icons[9]} alt="tiktok" />;
  }

  function handleInput1KeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      event.target.nextSibling.focus();
    } else if (event.key === "Enter") {
      setIsEdit(false);
      setPenIsEdit(false);
    }
  }

  function handleInput2KeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      event.target.previousSibling.focus();
    } else if (event.key === "Enter") {
      setIsEdit(false);
    }
  }

  function handleInputFocus() {
    setIsEdit(!isEdit);
    setTimeout(() => {
      const inputElem = document.getElementById("input1");
      if (inputElem) {
        inputElem.focus();
      }
    }, 0);
  }

  let result = posts.map((index) => {
    return (
      <div key={index}>
        <div
          className={cn(styles.block)}
          onMouseEnter={() => setPenIsEdit(true)}
          onMouseLeave={changePenColor}
        >
          <div className={cn(styles.block__container)}>
            <div className={cn(styles.block__img)}>{socialMedia}</div>
            {!isEdit ? (
              <a href={inputLink} className={cn(styles.block__link)}>
                {inputTitle ? inputTitle : "Title"}
              </a>
            ) : (
              <div className={cn(styles.double__input)}>
                <input
                  id="input1"
                  type="text"
                  value={inputTitle === "title" ? "" : inputTitle}
                  placeholder="Title"
                  onChange={(e) => setInputTitle(e.target.value)}
                  onKeyDown={handleInput1KeyDown}
                />
                <input
                  id="input2"
                  type="text"
                  value={inputLink === "link" ? "" : inputLink}
                  placeholder="Link"
                  onChange={(e) => setInputLink(e.target.value)}
                  onKeyDown={handleInput2KeyDown}
                  // onBlur={() =>
                  //   elemInput.focus() ? setIsEdit(true) : setIsEdit(false)
                  // }
                />
              </div>
            )}
            <div className={cn(styles.change__link)}>
              {penIsEdit && (
                <BsPencilSquare
                  className={cn(styles.change__link_icon)}
                  onClick={handleInputFocus}
                />
              )}
            </div>
          </div>
          <div className={cn(styles.remove__btn)}>
            <MdRemoveCircleOutline onClick={() => setPosts([])} />
          </div>
        </div>
      </div>
    );
  });

  return <>{result}</>;
};

export default MyLink;
