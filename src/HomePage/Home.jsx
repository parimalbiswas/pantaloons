import React from 'react'
import Slideshow from './SlideShow'
import style from '../Styles/home.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import WomenCard from './WomenCard'

function valuetext(value) {
  return `${value}°C`;
}

const Home = () => {



  return (
    <div>
      <Slideshow />
      <div className={style.img_div}>
        <img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/testdata/stylefinder_desktop_latest.jpg.transform/i1366x532/image.jpeg"
          alt="image" className={style.first_img} />
        <div className={style.img_over_text}>
          <h2 className={style.specific}>Looking for something specific? Let's get you there.</h2>
          <div className={style.shopping_btn}>
            <h4>Shopping for</h4>
            <button className={style.men_btn}>Men</button>
            <button>Women</button>
            <button>Kids</button>
            <button>Accessories</button>
            <h4>Occasion</h4>
            <button className={style.men_btn}>Casual</button>
            <button>Work Wear</button>
            <button>festive</button>
            <button>Party</button>

            <h4>Show me</h4>
            <div className={style.showme_span}>
              <span className={style.slider_span}>
                <Box sx={{ width: 400 }}>
                  <Slider
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={0.00000010}
                    marks

                    min={-0.00000009}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </span>
              <div className={style.latest}>
                <p>Latest</p>
                <p>Most Popular</p>
              </div>
            </div>
            <button className={style.show_more_btn}>SHOW MORE RECOMENDATION</button>
          </div>

        </div>
      </div>

      <div className={style.products_div}>
<h3 className={style.heading}>Must Have Styles of the Season</h3>

{/* <WomenCard/> */}
<WomenCard/>

      </div>
    </div>
  )
}

export default Home;