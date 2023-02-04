import React from 'react';
import s from './NDA.module.scss'
import {Title} from "../../common/components/title/Title";
import {HeaderNda} from "./HeaderNda/HeaderNda";
import {ContentNda} from "./ContentNda/ContentNda";
import {Consultation} from "./Consultation/Consultation";

export const Nda = () => {
    return (<div>
            <Title header={'НДА (Соглашение о неразглашении)'} desc={'ГЛАВНАЯ > НДА(Соглашение о неразглашении)'}/>
            <div className={s.container}>
                <HeaderNda/>

            </div>
            <ContentNda/>
            <Consultation/>
        </div>
    );
};

