'use client'

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import stylesSlick from "./slick-theme.css";
import styles from "./styles.module.css";


export default class AutoPlay extends Component {
    render() {
      const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 8,
          autoplay: true,
          speed: 2000,
          autoplaySpeed:2000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
          ],
        };
      return (
      
        <div className='mt-5'>

          <h1 className='text-center mb-3'><strong>MARKALARIMIZ</strong></h1>
          <Container fluid className=" p-5 d-block text-center justify-content-center">
          <Slider {...settings} className={stylesSlick} >
            <div className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/bmw.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/mini.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/hes-otomotiv-Behr-Hella-Logo.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/hes-otomotiv-wender.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/hes-otomotiv-luk.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-valeo.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-hella.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/hes-otomotiv-ina.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`} >
            <img src="/images/brands/hes-otomotiv-textar.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-nissens.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-manfilter.jpeg" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-lemforder.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-boge.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-glyco.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-mahle.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-gates.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-goetze.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-delphi.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-cortego.png" alt="Logo" className={styles.sliderImage} />
            </div>
            <div className={`${styles.brandSlider} m-1`}>
            <img src="/images/brands/hes-otomotiv-swf.png" alt="Logo" className={styles.sliderImage} />
            </div>
          </Slider>
          </Container>
        </div>
      );
    }
  }