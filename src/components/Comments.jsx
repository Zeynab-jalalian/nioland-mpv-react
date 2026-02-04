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
        <Cbox
          title="من خیلی خوشحالم!"
          par=" سارا، یک صاحب کسب و کار کوچک، فروش آنلاین خود را در عرض سه ماه پس از
            استفاده از پلتفرم تجارت الکترونیک ما دو برابر کرد و درآمد خود را
            افزایش داد و پایگاه مشتریان خود را گسترش داد."
          img="/nioland-mpv-react/img/authour-3.jpeg"
          name="Fleix Everard"
          dec="HR, Blue Soft Sol"
        />
        <Cbox
          title=" راه حل های درخشان "
          par=" سارا، یک صاحب کسب و کار کوچک، فروش آنلاین خود را در عرض سه ماه پس از استفاده از پلتفرم تجارت الکترونیک ما دو برابر کرد و درآمد خود را افزایش داد و پایگاه مشتریان خود را گسترش داد."
          img="/nioland-mpv-react/img/authour-2.jpeg"
          name="Boris Elbert"
          dec="Green Tech"
        />
        <Cbox
          title=" بهترین بستر برای یادگیری"
          par=" سارا، یک صاحب کسب و کار کوچک، فروش آنلاین خود را در عرض سه ماه پس از استفاده از پلتفرم تجارت الکترونیک ما دو برابر کرد و درآمد خود را افزایش داد و پایگاه مشتریان خود را گسترش داد."
          img="/nioland-mpv-react/img/authour-1.jpeg"
          name="Ivor Herbert"
          dec="Manager, Airlines"
        />
      </div>
    </div>
  );
}

export default Comments;
