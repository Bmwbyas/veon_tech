import React from 'react';
import s from './DescriptionAboutUs.module.scss'
import {descData, featureData} from "./data";
import {WorkResult} from "./WorkResult/WorkResult";

export const DescriptionAboutUs = () => {
    return (
        <div className={s.cotainer}>
            <div className={s.dataContainer}>
                <h1 className={s.headDecs}>Почему нам доверяют?</h1>
                {descData.map((data, index) => <div key={index}>
                    <div className={s.header}><div className={s.span}>{index+1}</div>{data.header}</div>
                    <div className={s.text}>{data.desc}</div>
                </div>)}

            </div>
            <div className={s.cotainerDecs}>

                <WorkResult/>
            </div>
        </div>
    );
};

