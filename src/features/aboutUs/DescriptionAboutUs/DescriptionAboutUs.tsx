import React from 'react';
import s from './DescriptionAboutUs.module.scss'
import {descData, featureData} from "./data";

export const DescriptionAboutUs = () => {
    return (
        <div className={s.cotainer}>
            <div className={s.dataContainer}>
                {descData.map((data, index) => <div key={index}>
                    <div className={s.header}><span className={s.span}>{data.header}</span></div>
                    <div className={s.text}>{data.desc}</div>
                </div>)}

            </div>
            <div className={s.cotainerDecs}>
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
            </div>
        </div>
    );
};

