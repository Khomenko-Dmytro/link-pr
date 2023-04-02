import React from "react";
import "./style.css";
import { useState } from "react";
import { MdCreate } from "react-icons/md";

function id() {
  let date = Date.now();
  let random = Math.random().toString(36).substr(2);
  return date + random;
}

const MyLinks = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [penIsEdit, setPenIsEdit] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: id(),
      title: "Instagram",
      site: "https://www.instagram.com/seb1us/",
      isEdit: false,
    },
  ]);

  // function handlerIsEdit() {
  //   setPosts(
  //     posts.map((note) => {
  //       if (!note.edit) {
  //         return { ...note, edit: true };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }

  // function editLinks(id, e, prop) {
  //   setPosts(
  //     posts.map((note) => {
  //       if (note.id === id) {
  //         return { ...note, [prop]: e.target.value };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }

  const result = posts.map((note) => {
    if (!note.isEdit) {
      return (
        <a key={note.id} href={note.site} className="block__link">
          {note.title}
        </a>
      );
    } else {
      return (
        <div key={note.id} className="double__input">
          <input
            type="text"
            value={note.title}
            // onChange={(e) => editLinks(note.id, e, note.title)}
          />
          <input
            type="text"
            value={note.site}
            // onChange={}
          />
        </div>
      );
    }
  });

  // function changeItem(id) {
  //   setPosts(
  //     posts.map((note) => {
  //       if (note.id === id) {
  //         return { ...note, edit: !edit };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }

  return (
    <div
      className="block__container"
      // onMouseEnter={() => setIsEdit(true)}
      // onMouseLeave={handlerIsEdit}
    >
      <div className="block__img"></div>
      {result}
      {penIsEdit ? (
        <div className="change__link" onClick={() => setPenIsEdit(true)}>
          <MdCreate className="change__link_icon" />
        </div>
      ) : (
        <div className="void__div"></div>
      )}
    </div>
  );
};

export default MyLinks;
