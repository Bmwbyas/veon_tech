import React from 'react';
import s from './CostService.module.scss'
import logo from "../../../../assets/img/hr-girl.jpg";

// @ts-ignore
import {Carousel} from '3d-react-carousal';
import {Card} from "./card/Card";

export const CostService = ({}) => {
    const resetSlider = (index:any) => {
        return index;
    }
    const sliderSettings = {

        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        accessibility: true,
        // variableWidth: true

    }
    const costData=[
        <Card imagen={logo}/>,
        <Card imagen={logo}/>,
        <Card imagen={logo}/>,


            ]
    return (
        <div className={s.container}>
            <div>
                <div className={s.h1}>Гибкие и Прозрачные Цены</div>
                <div className={s.desc}>Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </div>


                </div>
            </div>

    );
};

