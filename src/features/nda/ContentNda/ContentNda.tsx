import React from 'react';
import s from './ContentNda.module.scss'
import {ndaData} from "./data";
import def from "../../../assets/img/imgNDA/defence.png";

export const ContentNda = () => {

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <h1 className={s.header}>Вы можете нам доверять</h1>
                <div className={s.wrapContent}>
                    <div className={s.contentContainer}>
                        {ndaData.map(n => <div className={s.itemContainer} key={n.id}>
                            <div className={s.itemHeader}>{n.header}</div>
                            <div className={s.itemDesc}>{n.desc}</div>
                        </div>)}
                    </div>
                    <div className={s.imgContainer}>
                        <img src={def} alt="def"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

