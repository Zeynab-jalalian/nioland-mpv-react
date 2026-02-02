import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="part1">
          <div className="logo-home">
            <img src="/nioland-mpv-react/img/icon-globe.png" alt="icon" />
          </div>
          <div className="btns-home">
            <div className="btn-home">قالب نیولند</div>
            <div className="btn-home">آموزش</div>
            <div className="btn-home">زبان انگلیسی</div>
          </div>
          <div className="icon-home">
            <img src="/nioland-mpv-react/img/icon-love.png" alt="icon" />
          </div>
        </div>
        <p className="leading">
          در اینجا با آموزش رایگان زبان، زبان بیاموزید. دروس فشرده را از
          کارشناسان دریافت کنید و با جامعه ای از زبان مادری ارتباط برقرار کنید
          تا به شما کمک کند سریعتر کلمات را تسلط دهید.
        </p>
        <div className="part3">
          <div className="icon-3 icon-3i">
            <img src="/nioland-mpv-react/img/icon-en.png" alt="" />
          </div>
          <div className="icons-3 icon-3b">
            <img src="/nioland-mpv-react/img/flag-5.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-4.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-3.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-2.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-1.png" alt="" />
          </div>
          <div className="icon-3 icon-3i">
            <img src="/nioland-mpv-react/img/icon-cn.png" alt="" />
          </div>
        </div>
        <button className="btn2-home">شروع به یادگیری</button>
        <p className="leading">
          بیش از 32K+ تجارت نرم افزار در حال رشد با نیولند
        </p>
        <div className="part4">
          <img src="/nioland-mpv-react/img/client-w-1.png" alt="" />
          <img src="/nioland-mpv-react/img/client-w-2.png" alt="" />
          <img src="/nioland-mpv-react/img/client-w-3.png" alt="" />
          <img src="/nioland-mpv-react/img/client-w-4.png" alt="" />
          <img src="/nioland-mpv-react/img/client-w-5.png" alt="" />
        </div>
        <div className="part4-res">
           <img src="/nioland-mpv-react/img/client-w-1.png" alt="" />
          <img src="/nioland-mpv-react/img/client-w-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
