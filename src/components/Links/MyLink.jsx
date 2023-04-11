import React from "react";
import styles from "./link.module.css";
import cn from "classnames";
import { useState } from "react";
import { MdCreate } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useEffect } from "react";

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
    <img src="/src/components/Header/icons/instagram.png" alt="instagram" />,
    <img src="/src/components/Header/icons/facebook.png" alt="facebook" />,
    <img src="/src/components/Header/icons/youtube.png" alt="youtube" />,
    <img src="/src/components/Header/icons/twitter.png" alt="twitter" />,
    <img src="/src/components/Header/icons/soundcloud.png" alt="soundcloud" />,
  ];

  const [isEdit, setIsEdit] = useState(posts.isEdit);
  const [penIsEdit, setPenIsEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState("title");
  const [inputLink, setInputLink] = useState("link");

  function changePenColor() {
    if (isEdit) {
      setPenIsEdit(true);
    } else {
      setPenIsEdit(false);
    }
  }

  let socialMedia = (
    <img src="/src/components/Header/icons/instagram.jpeg" alt="instagram" />
  );
  // if (inputTitle === "instagram") {
  //   socialMedia = icons[0];
  // } else if (inputTitle === "facebook") {
  //   socialMedia = icons[1];
  // } else if (inputTitle === "youtube") {
  //   socialMedia = icons[2];
  // } else if (inputTitle === "twitter") {
  //   socialMedia = icons[3];
  // } else if (inputTitle === "soundcloud") {
  //   socialMedia = icons[4];
  // }

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
                {inputTitle}
              </a>
            ) : (
              <div className={cn(styles.double__input)}>
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  onBlur={() => setIsEdit(false)}
                />
                <input
                  type="text"
                  value={inputLink}
                  onChange={(e) => setInputLink(e.target.value)}
                  onBlur={() => setIsEdit(false)}
                />
              </div>
            )}

            <div className={cn(styles.change__link)}>
              {penIsEdit && (
                <MdCreate
                  className={cn(styles.change__link_icon)}
                  onClick={() => setIsEdit(!isEdit)}
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
