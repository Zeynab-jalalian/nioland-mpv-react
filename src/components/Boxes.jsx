import React from "react";
import "./Boxes.css";
import BoxItem from "./BoxItem";

function Boxes() {
  return (
    <div className="boxes">
      <h1>
        <span>تغییر</span>
        شیوه یادگیری زبان‌های جدید
      </h1>
      <div className="boxes-div">
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
      </div>
    </div>
  );
}

export default Boxes;
