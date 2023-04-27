import React from "react";
import styles from "./styles/App.module.css";
import stylesInfo from "./components/Info/info.module.css";
import cn from "classnames";
import { useState } from "react";
import UserName from "./components/UserName/UserName";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import List from "./components/Link/List";
import Info from "./components/Info/Info";
import handleScroll from "./actions/handleScroll";
import { generateId } from "./utils";

function App() {
  //Кількість Link блоків
  const [list, setList] = useState([{ id: generateId() }]);
  //Фото
  const [photo, setPhoto] = useState(null);

  //Поява Header-у при прокрутці
  useEffect(() => {
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
        <List array={list}/>
        <div className={cn(styles.block__marg)} />
        <Footer onClick={() => setList((prevState) => [...prevState, { id: generateId() }])} />
        {info && <Info onClick={handlerChangeInfo} />}
      </div>
    </div>
  );
}

export default App;
