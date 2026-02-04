import React from "react";
import Itemsdiv from "./Itemsdiv";

const items = [
  {
    amount: "70",
    title: "دروس تدریس شده",
    par: "دروس جذاب و آموزشی برای همه دروس، متناسب با...",
  },
  {
    amount: "40",
    title: "دانش آموزان ثبت نامی",
    par: "به جامعه دانشجویی ما بپیوندید و دنیایی از دانش و...",
  },
  {
    amount: "11",
    title: "دروس تدریس شده",
    par: "طیف متنوع دروس تدریس شده متخصصان در زمینه مختلف را کاوش کنید تا ...",
  },
  {
    amount: "15",
    title: "نظرات 5 ستاره",
    par: "کشف کنید که چرا دوره های ما بررسی های 5 ستاره متعددی را دریافت کرده اند...",
  },
];
function Items() {
  return (
    <div className="items1">
      <Itemsdiv {...items[0]} />
      <Itemsdiv {...items[1]} />
      <Itemsdiv {...items[2]} />
      <Itemsdiv {...items[3]} />
    </div>
  );
}

export default Items;
