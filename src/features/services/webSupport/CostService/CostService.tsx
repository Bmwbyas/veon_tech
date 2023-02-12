import React from 'react';
import s from './CostService.module.scss'
import absolute from "../../../../assets/img/imgSupport/absolute-maintenance.png";
import advice from "../../../../assets/img/imgSupport/advanced-maintenance.png";
import optimal from "../../../../assets/img/imgSupport/optimal-maintenance.png";
import {Button} from "../../../../common/components/Button/Button";

// @ts-ignore
import {Carousel} from '3d-react-carousal';

import Contact from "../../../main/contact/Contact";


export const CostService = ({}) => {
    let slides = [
        <div>
            <img src={absolute} alt="1"/>
            <div>Абсолютный</div>
            <div>Абсолютный</div>
            <div><Button name={'Заказать'}/></div>
        </div>,
        <div>
            <img src={advice} alt="2"/>
            <div>dfdgvdfgsdf</div>
            <div><Button name={'Заказать'}/></div>
        </div>,
        <div>
            <img src={optimal} alt="3"/>
            <div>dfdgvdfgsdf</div>
            <div><Button name={'Заказать'}/></div>
        </div>,
    ];

    return (
        <div className={s.container}>

            <div className={s.h1}>Гибкие и Прозрачные Цены</div>
            <div className={s.desc}>Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={s.sliderContainer}>
                <Carousel  slides={slides} autoplay={false} arrows={true}  />
            </div>
           <Contact/>

        </div>


    );
};

