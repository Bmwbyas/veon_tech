import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './Portfolio.module.scss'
import {allCategoryPortfolio} from "./data";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = () => {
    const sliderSettings = {

        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        accessibility: true,
        // variableWidth: true

    }
    return (
        <div className={s.container}>
            <div className={s.h2}>ПОРТФОЛИО</div>

            <Slider      {...sliderSettings}  >

                {allCategoryPortfolio &&
                    allCategoryPortfolio.map((card, index) => {
                        const img = {
                            backgroundImage: 'url(' + card.img + ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }
                        return<div className={s.itemWrap}>
                            <div className={s.itemContainer} key={index}>
                                <div className={s.img} style={img}>
                                    {/*<img  src={card.img}  alt="portfolio reevan"  />*/}
                                </div>
                                <div className={s.text}>
                                    <p>{card.type}</p>
                                    <h4>{card.title}</h4>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
};

export default Portfolio;
