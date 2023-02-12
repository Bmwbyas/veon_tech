import React from 'react';
import s from "./WorkResult.module.scss";
import {featureData} from "../data";

export const WorkResult = () => {
    return (
        <>
            <div className={s.headerDesc}><span className={s.span}>Мы работаем на результат!</span></div>
            <div className={s.featuresCont}>
                {featureData.map((f,index) => <div key={index} className={s.feat}>
                    <div className={s.img} style={f.img}></div>
                    <div className={s.featContent}>
                        <div className={s.head}>{f.header}</div>
                        <div className={s.featDesc}>{f.desc}</div>
                    </div>
                </div>)}
            </div>
        </>
    );
};

