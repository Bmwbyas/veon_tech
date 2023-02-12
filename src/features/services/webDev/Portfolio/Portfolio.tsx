import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './Portfolio.module.scss'

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {allCategoryPortfolio} from "./data";


const Portfolio: React.FC = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

    // console.log(windowWidth)
    React.useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.screen.width)
        };


    }, []);

    let countSlideToShow = 1
    if (windowWidth > 1280) {
        countSlideToShow = 4
    }
    if (windowWidth > 1110) {
        countSlideToShow = 3
    }
    if (windowWidth > 700) {
        countSlideToShow = 2
    }
    // console.log(countSlideToShow)
    const sliderSettings = {

        infinite: true,
        speed: 700,
        slidesToShow: countSlideToShow,
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

                {
                    allCategoryPortfolio.map((card, index) => {
                        const img = {
                            backgroundImage: 'url(' + card.img + ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }
                        return <div key={index} className={s.itemWrap}>
                            <div className={s.itemContainer} >
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
