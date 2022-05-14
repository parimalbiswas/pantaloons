import React from 'react'
import style from '../Styles/home.module.css'
import {WomenData} from "./WomenData"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


console.log(WomenData)
const WomenCard = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      }

  return (
      <div className={style.main_div}>
        <img src="https://pantaloons.imgix.net/img/app/brands/pantaloons/navArrows/previous.png" alt="prev" className={style.prev_btn} />
        <Slider {...settings}>
    <div className={style.grid_div}>
         {
            WomenData.map((item)=>(
                <div className={style.card_map} key={item.id}>
                    <div>
                    <img src={item.img} alt="card" className={style.card_img}/>
                   

                    <img src="https://pantaloons.imgix.net/img/app/brands/pantaloons/icons/product-label.svg" alt="label" className={style.label}/>
                  <span className={`${style.label} ${style.label_txt}`}>Online Exclusive</span>
                  
                  <img src="https://pantaloons.imgix.net/img/app/brands/pantaloons/icons/like.svg" alt="wiselist" className={style.addlist}/>
                   <div className={style.title_div}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <h5>{` ₹ ${item.price}`}</h5>
                    </div>
                    </div>
                </div>
            ))
        } 
    </div>
    </Slider>
        <img src="https://pantaloons.imgix.net/img/app/brands/pantaloons/navArrows/next.png" alt="next" className={style.next_btn}/>
        </div>
  )
}

export default WomenCard