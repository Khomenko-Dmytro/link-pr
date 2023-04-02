import React from "react";
import "./styles/App.css";
import MyLinks from "./components/Links/MyLinks";
import { useState } from "react";
import UserName from "./components/UserName/UserName";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 70) {
        document.querySelector(".block__header").style.visibility = "visible";
        document.querySelector(".header__link").style.backgroundColor = "white";
        document.querySelector(".header__link_icon").style.color = "black";
      } else {
        document.querySelector(".block__header").style.visibility = "hidden";
        document.querySelector(".header__link").style.backgroundColor =
          "rgb(0, 0, 0)";
        document.querySelector(".header__link_icon").style.color = "white";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="fullscreen">
        <Header />
        <UserName />
        <MyLinks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
