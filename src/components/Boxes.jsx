import React from "react";
import "./Boxes.css";
import BoxItem from "./BoxItem";

const boxitems = [
  {
    par: "بیش از 1000 ترکیب زبان تا بتوانید یاد بگیرید.",
    bgboxicon:"#54a8c7",
    icon:"bi bi-globe"
  },
  {
    par: "یادگیری یک زبان جدید می تواند چالش برانگیز باشد، اما درها را باز می کند",
    bgboxicon:"#FDB52A",
    icon:"bi bi-book"
  },
  {
    par: "36 واژگان برای نصب سریع کلمات برای بهبود مداوم",
    bgboxicon:"#3F53D8",
    icon:"bi bi-fonts"
  },
  {
    par: "41 مکالمه واقعی که به شما تسلط در یادگیری زبان می دهد",
    bgboxicon:"#FA5B68",
    icon:"bi bi-globe"
  },
  {
    par: "ویژگی های گرامر و جداول صرف برای میانبر کردن پیشرفت شما",
    bgboxicon:"#16D5FF",
    icon:"bi bi-book"
  },
  {
    par: "هر روشی که ترجیح می دهید، با این همه زبان.",
    bgboxicon:"#0ECF82",
    icon:"bi bi-fonts"
  },
];
function Boxes() {
  return (
    <div className="boxes">
      <h1>
        <span>تغییر</span>
        شیوه یادگیری زبان‌های جدید
      </h1>
      <div className="boxes-div">
        <BoxItem {...boxitems[0]} />
        <BoxItem {...boxitems[1]} />
        <BoxItem {...boxitems[2]} />
        <BoxItem {...boxitems[3]} />
        <BoxItem {...boxitems[4]} />
        <BoxItem {...boxitems[5]} />
      </div>
    </div>
  );
}

export default Boxes;
