import React from "react";
import "./styles/App.css";
import MyInput from "./components/Input/MyInput";
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
      } else {
        document.querySelector(".block__header").style.visibility = "hidden";
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
        {<Header />}
        <UserName />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <Footer />
      </div>
    </div>
  );
}

export default App;
