import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="/img/logo-1.png" alt="Logo" width="150px" />
        </div>
        <div className="list">
          <ul>
            <li>
              صفحه اصلی
              <i class="bi bi-chevron-down"></i>
            </li>
            <li>
              صفحات
              <i class="bi bi-chevron-down"></i>
            </li>
            <li>
              فروشگاه
              <i class="bi bi-chevron-down"></i>
            </li>
            <li>
              بلاگ
              <i class="bi bi-chevron-down"></i>
            </li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className="button-shop">
            <i class="bi bi-bag"></i>
            <span>اکنون بخرید</span>
        </div>
      </div>
      <div className="header-responsive">
        <div className="logo">
          <img src="/img/logo-1.png" alt="Logo" width="150px" />
        </div>
        <div>
          <i class="bi bi-list"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
