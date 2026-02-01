import React from "react";
import "./Free.css";

function Free() {
  return (
    <div className="free">
      <h1>اکنون یک آزمایش رایگان نیولند را شروع کنید!</h1>
      <p>
        این یک مهارت ارزشمند است که به افراد امکان می دهد با افراد از پیشینه ها
        و فرهنگ های مختلف ارتباط برقرار کنند و با آنها تعامل داشته باشند.
        یادگیری یک زبان جدید هم چالش برانگیز و هم ارزشمند است، زیرا برای تسلط بر
        آن نیاز به زمان، صبر و فداکاری دارد.
      </p>
      <div className="input-free">
        <button className="button-free">اشتراک</button>
        <input type="text" placeholder="آدرس ایمیل شما" />
      </div>
      <ul className="free-ul">
        <li>
          <i class="bi bi-arrow-right-circle"></i>
          <span>آزمایشی 14 روزه رایگان</span>
        </li>
        <li>
          <i class="bi bi-arrow-right-circle"></i>
          <span>اعضای نامحدود</span>
        </li>
        <li>
          <i class="bi bi-arrow-right-circle"></i>
          <span>ورود آسان</span>
        </li>
      </ul>
    </div>
  );
}

export default Free;
