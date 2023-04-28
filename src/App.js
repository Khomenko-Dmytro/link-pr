import React, {useEffect, useState} from "react";
import styles from "./styles/App.module.css";
import stylesInfo from "./components/Info/info.module.css";
import cn from "classnames";
import UserName from "./components/UserName/UserName";
import Header from "./components/Header/Header";
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

  useEffect(() => {
    document.body.style.overflow = info ? "hidden" : "scroll"
  }, [info])
  //
  function handlerChangeInfo(e) {
    const infoClass = document.querySelector(`.${stylesInfo.wrapper}`);

    if (e.target === infoClass) {
      setInfo(!info);
    }
  }

  const handleAddItem = () => setList((prevState) => [...prevState, { id: generateId() }]);

  const handleRemoveItem = (targetId) => setList(
    (prevState) => prevState.filter(({ id }) => id !== targetId)
  );

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.fullscreen)}>
        <Header photo={photo} onClick={() => setInfo(!info)} />
        <UserName onPhotoChange={(e) => setPhoto(e)} />
        <List array={list} onRemoveItem={handleRemoveItem} />
        <div className={cn(styles.block__marg)} />
        <Footer onClick={handleAddItem} />
        {info && <Info onClick={handlerChangeInfo} />}
      </div>
    </div>
  );
}

export default App;
