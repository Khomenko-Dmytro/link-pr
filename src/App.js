import React from "react";
import styles from "./styles/App.module.css";
import stylesHeader from "./components/Header/header.module.css";
import cn from "classnames";
import { useState } from "react";
import UserName from "./components/UserName/UserName";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import MyLink from "./components/Links/MyLink";

function id() {
  let date = Date.now();
  let random = Math.random().toString(36).substr(2);
  return date + random;
}

function App() {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.fullscreen)}>
        <Header />
        <UserName />
        {posts}
        <Footer onClick={() => setPosts([...posts, <MyLink key={id()} />])} />
      </div>
    </div>
  );
}

export default App;
