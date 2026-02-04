import React from 'react'
import "./Items.css";
function Itemsdiv({amount,title,par}) {
  return (
      <div className="item1">
          <h1>
            {amount}
            <span>k</span>
          </h1>
          <h2>{title}</h2>
          <p>{par}</p>
        </div>
  )
}

export default Itemsdiv
