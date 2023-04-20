import React from "react";
import styles from "./styles/App.module.css";
import stylesHeader from "./components/Header/header.module.css";
import stylesInfo from "./components/Info/info.module.css";
import cn from "classnames";
import { useState } from "react";
import UserName from "./components/UserName/UserName";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import MyLink from "./components/Links/MyLink";
import Photo from "./components/UI/Photo";
import Info from "./components/Info/Info";

function id() {
  let date = Date.now();
  let random = Math.random().toString(36).substr(2);
  return date + random;
}

function App() {
  //Кількість Link блоків
  const [posts, setPosts] = useState([<MyLink key={id()} />]);
  //Фото
  const [photo, setPhoto] = useState(null);

  //Поява Header-у при прокрутці
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 70) {
        document.querySelector(
          `.${stylesHeader.block__header}`
        ).style.visibility = "visible";
        document.querySelector(
          `.${stylesHeader.header__link}`
        ).style.backgroundColor = "white";
        document.querySelector(
          `.${stylesHeader.header__link_icon}`
        ).style.color = "black";
      } else {
        document.querySelector(
          `.${stylesHeader.block__header}`
        ).style.visibility = "hidden";
        document.querySelector(
          `.${stylesHeader.header__link}`
        ).style.backgroundColor = "rgb(0, 0, 0)";
        document.querySelector(
          `.${stylesHeader.header__link_icon}`
        ).style.color = "white";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Блок Info
  const [info, setInfo] = useState(false);
  //
  function handlerChangeInfo(e) {
    const infoClass = document.querySelector(`.${stylesInfo.wrapper}`);

    if (e.target === infoClass) {
      setInfo(!info);
    }
  }

  info
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.fullscreen)}>
        <Header photo={photo} onClick={() => setInfo(!info)} />
        <UserName onPhotoChange={(e) => setPhoto(e)} />
        {posts}
        <div className={cn(styles.block__marg)}></div>
        <Footer onClick={() => setPosts([...posts, <MyLink key={id()} />])} />
        {info ? <Info onClick={handlerChangeInfo} /> : ""}
      </div>
    </div>
  );
}

export default App;
