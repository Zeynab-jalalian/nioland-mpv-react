import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banners">
      <div className="banner-1">
        <p>
          اگر به یادگیری یک زبان جدید فکر می کنید، چند نکته وجود دارد که باید در
          نظر بگیرید. اولین نکته این است که انگیزه خود را برای یادگیری زبان
          شناسایی کنید. آیا برای رشد شخصی، مسافرت، پیشرفت شغلی یا برای ارتباط با
          دوستان و خانواده ای که به این زبان صحبت می کنند؟ زمانی که انگیزه خود
          را شناسایی کردید.
        </p>
         <div className="icons-3 i-c-b">
            <img src="/nioland-mpv-react/img/flag-5.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-4.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-3.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-2.png" alt="" />
            <img src="/nioland-mpv-react/img/flag-1.png" alt="" />
          </div>
            <button className="btn2-home">شروع کنید</button>
      </div>
      <div className="banner-2">
        <div className="btn-banner">اندیشیدن درباره</div>
        <div className="btn2-banner">آموزش زبان؟</div>
      </div>
      <div className="banner-3">
        <img src="/nioland-mpv-react/img/image-2-2.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;
