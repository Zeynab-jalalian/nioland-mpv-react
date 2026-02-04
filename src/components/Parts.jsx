import React from "react";
import "./Parts.css";
import PartItem from "./PartItem";

const partitems = [
  {
    img: "/nioland-mpv-react/img/blog-1-1.jpeg",
    btn: "رشد",
    title: "چرا حفظ مشتری استراتژی رشد نهایی است؟",
    par: "حفظ مشتری بهترین راه برای بهینه سازی ماشین درآمد شماست. حفظ مشتری…",
  },
  {
    img: "/nioland-mpv-react/img/blog-1-2.jpeg",
    btn: "بازاریابی",
    title: "بهینه سازی کمپین های تبلیغاتی خود برای ROAS بالاتر",
    par: "یعنی هر یک دلاری که برای تبلیغات خرج می شود، سه دلار…",
  },
  {
    img: "/nioland-mpv-react/img/blog-1-3.jpeg",
    btn: "رشد",
    title: "نحوه ساختن پشته فناوری نهایی برای رشد",
    par: "اعضای تیم شما کسانی هستند که روزانه از پشته فناوری شما استفاده…",
  },
];
function Parts() {
  return (
    <div className="partsss">
      <PartItem {...partitems[0]} />
      <PartItem {...partitems[1]} />
      <PartItem {...partitems[2]} />
    </div>
  );
}

export default Parts;
