import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
         <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>

            </div>
            <div className="item">
                  <h1>About</h1>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, fugiat? Laboriosam libero earum deserunt quidem sint distinctio officiis voluptate optio quae ipsam commodi labore, veritatis illum, ipsum corporis vero? Sequi!
                  </span>
                  

            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, fugiat? Laboriosam libero earum deserunt quidem sint distinctio officiis voluptate optio quae ipsam commodi labore, veritatis illum, ipsum corporis vero? Sequi!
                  </span>
            </div>
         </div>
         <div className="bottom">
             <div className="left">
                <span className='logo'>GOLSTORE</span>
                <span className='copyright'>&copy; Copyright 2023. ALL Right Reserved </span>
             </div>
             <div className="righ">
                <img src="/img/payment.png" alt="" />
             </div>
         </div>
    </div>
  )
}

export default Footer