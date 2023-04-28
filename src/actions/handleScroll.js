import stylesHeader from "../components/Header/header.module.css";

export default function handleScroll() {
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
};
