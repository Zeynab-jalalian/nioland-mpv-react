import React from "react";

function PartItem({img,btn,title,par}) {
  return (
    <div className="part-1-1">
      <div className="img-sss">
        <img src={img} alt="" />
      </div>
      <button className="btn-sss">{btn}</button>
      <div className="expl">
        <h1>{title}</h1>
        <p>
         {par}
        </p>
      </div>
      <div className="user-sss">
        <div className="user-ss">
          <p>مدیریت</p>
          <span>تیر 11, 1402</span>
        </div>
        <ul className="list-ss">
          <li>ارسال نظر</li>
        </ul>
      </div>
    </div>
  );
}

export default PartItem;
