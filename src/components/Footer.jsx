import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logofooter">
        <div className="logo">
          <img src="/nioland-mpv-react/img/logo-dark-3.png" width="170" alt="" />
        </div>
        <p>
          با مجموعه راه حل های قدرتمند ما، عملیات تجاری خود را ساده کنید. افزایش
          بهره وری و رشد با نیولند.
        </p>
        <div className="icons-footer">
          <a href="#">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#">
            <i class="bi bi-skype"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      <ul>
        <h2>صفحه ابزار</h2>
        <li>ثبت نام</li>
        <li>حساب کاربری</li>
        <li>فراموشی رمز عبور</li>
        <li>404 پیدا نشد</li>
        <li>ورود به سیستم</li>
      </ul>
      <ul>
        <h2>صفحات</h2>
        <li>امکانات</li>
        <li>مرکز کمک</li>
        <li>پست بلاگ</li>
        <li>مشاغل</li>
        <li>تعرفه ها</li>
      </ul>
      <ul>
        <h2>صفحات</h2>
        <li>درباره ما</li>
        <li>بلاگ</li>
        <li>نظرات مشتریان</li>
        <li>تماس با ما</li>
      </ul>
      <ul>
        <h2>سایر صفحات</h2>
        <li>ردیاب هزینه های تجاری</li>
        <li>هزینه کسب و کار</li>
        <li>مدیریت کسب و کار</li>
        <li>آموزش زبان</li>
      </ul>

      <div className="up">
        <i class="bi bi-chevron-up"></i>
      </div>
    </div>
  );
}

export default Footer;
