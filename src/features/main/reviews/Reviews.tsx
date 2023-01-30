import React from 'react';
import s from './Reviews.module.scss'
import {clients} from "./data";
import Marquee from "react-fast-marquee";
import ReviewsContent from "./reviewsContent/ReviewsContent";


export const Reviews = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.header}>Наши работы</div>
                <div className={s.hr}></div>
                <Marquee speed={150}>
                    <div className={s.clients}>
                        {clients.map((cl, index) => <span key={index} style={cl} className={s.imgContainer}></span>)}
                    </div>
                </Marquee>
                <div className={s.hr}></div>

                <ReviewsContent/>
            </div>

        </div>
    );
};

