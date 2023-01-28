import React from 'react';
import s from './Main.module.scss'
import {HeaderMain} from "./headerMain/HeaderMain";
import {DescriptionWeb} from "./descriptionWeb/DescriptionWeb";
import {Technologies} from "./technologies/Technologies";
import {CasesAs} from "./casesAs/CasesAs";
import {Reviews} from "./reviews/Reviews";
import Contact from "./contact/Contact";


export const Main = () => {
    return (
        <div className={s.mainContainer}>
            <HeaderMain/>
            <DescriptionWeb/>
            <Technologies/>
            <CasesAs/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

