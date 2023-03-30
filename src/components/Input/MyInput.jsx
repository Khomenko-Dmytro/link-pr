import React from "react";
import "./style.css";
import { useState } from "react";
import { MdCreate } from "react-icons/md";

const MyInput = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("Instargram");
  const [link, setLink] = useState("https://www.instagram.com/seb1us/");
  const [linkStatus, setLinkStatus] = useState(false);

  function handlerIsEdit() {
    if (linkStatus) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }

  let elem;
  if (!linkStatus) {
    elem = (
      <a href={link} className="block__link">
        {title}
      </a>
    );
  } else {
    elem = (
      <div className="double__input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      className="block__container"
      onMouseEnter={() => setIsEdit(true)}
      onMouseLeave={handlerIsEdit}
    >
      <div className="block__img"></div>
      {elem}
      {isEdit ? (
        <div className="change__link" onClick={() => setLinkStatus(true)}>
          <MdCreate className="change__link_icon" />
        </div>
      ) : (
        <div className="void__div"></div>
      )}
    </div>
  );
};

export default MyInput;
