import React from 'react'

function Cbox({title,par,img,name,dec,rating=5}) {
  return (
    <div>
       <div className="c-box">
          <div className="stars-c">
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h2>{title}</h2>
          <p>
           {par}
          </p>
          <div className="user-c">
            <div className="img-c">
                <img src={img} alt="" />
            </div>
            <div className="c-info">
                <p>{name}</p>
                <span>{dec}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cbox

                                                                  