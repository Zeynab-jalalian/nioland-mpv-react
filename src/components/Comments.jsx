import React from "react";
import "./Comments.css";
import Cbox from "./Cbox";

function Comments() {
  return (
    <div className="comments">
      <div className="par-c">
        <h1>
          مردم عاشق <span>گویش</span> هستند
        </h1>
        <p>
          یادگیری با ما سرگرم کننده است، و تحقیقات نشان می دهد که کار می کند!
          یادگیری زبان در دیالکت کاملا رایگان است.
        </p>
      </div>
      <div className="comments-box">
        <Cbox />
        <Cbox />
        <Cbox />
      </div>
    </div>
  );
}

export default Comments;
