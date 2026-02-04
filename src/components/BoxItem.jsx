import React from "react";

function BoxItem({par,bgboxicon,icon}) {
  return (
    <div>
      <div className="box">
        <div className="box-icon" style={{background:bgboxicon}}>
          <i className={icon}></i>
        </div>
        <h2>{par}</h2>
      </div>
    </div>
  );
}

export default BoxItem;
