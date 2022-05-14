import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import styled from 'styled-components';
import style from '../Styles/slideshow.module.css'

const slideImages = [
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2Fmain-banner%2FCoolsters-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75",
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2F11th-17th%2Fmain-banner%2Fdesktop%2Fwhats%20your%20summer%20swag_D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75",
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2F11th-17th%2Fmain-banner%2Fdesktop%2FPTNEW30-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75",
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2Fmain-banner%2FSummerSale-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75",
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2F11th-17th%2Fmain-banner%2Fdesktop%2FEveryday-Effortless_-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75",
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2F11th-17th%2Fmain-banner%2Fdesktop%2FSummer-Hues-02-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75",
    "https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fmay22%2Fmain-banner%2FSummerSale-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75"
];

const b=styled.p`
    fontWeight :700,
`

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className={style.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>New @ Pantaloons? <b> FLAT 30% </b>  Off* on your<b> 1st</b> Order, Code: <b>PTNEW30</b>  | Min. order Rs.1500 | *T&C Apply</span>
            </div>
          </div>
          <div className={style.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>New @ Pantaloons? <b> FLAT 30% </b>  Off* on your<b> 1st</b> Order, Code: <b>PTNEW30</b>  | Min. order Rs.1500 | *T&C Apply</span>
            </div>
          </div>
          <div className={style.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>New @ Pantaloons? <b> FLAT 30% </b>  Off* on your<b> 1st</b> Order, Code: <b>PTNEW30</b>  | Min. order Rs.1500 | *T&C Apply</span>
            </div>
          </div>
        </Slide>

      </div>
    )
};

export default Slideshow;
