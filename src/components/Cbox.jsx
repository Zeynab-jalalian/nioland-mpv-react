import React from 'react'

function Cbox() {
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
          <h2>من خیلی خوشحالم! </h2>
          <p>
            سارا، یک صاحب کسب و کار کوچک، فروش آنلاین خود را در عرض سه ماه پس از
            استفاده از پلتفرم تجارت الکترونیک ما دو برابر کرد و درآمد خود را
            افزایش داد و پایگاه مشتریان خود را گسترش داد.
          </p>
          <div className="user-c">
            <div className="img-c">
                <img src="/public/img/authour-3.jpeg" alt="" />
            </div>
            <div className="c-info">
                <p>Fleix Everard</p>
                <span>HR, Blue Soft Sol</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cbox
