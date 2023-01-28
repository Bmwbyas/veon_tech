import React from 'react';
import s from './Technologies.module.scss'
import imgTechnologies from "../../../assets/img/imgMain/technologies/techWeb.png";
import {techData} from "./data";
import {TechnologiesItem} from "./technologiesItem/TechnologiesItem";


export const Technologies = () => {

    return (
        <div className={s.container}>
            <h2 className={s.header}>Технологии, с которыми мы работаем</h2>
            <div className={s.namesTechnologies}>
                <button className={s.nameTech}>Front-end разработка</button>
                <button className={s.nameTech}>Разработка По</button>
                <button className={s.nameTech}>База данных</button>
                <button className={s.nameTech}>CMS</button>
            </div>
            <div className={s.descContainer}>
                {techData['frontend'].map(t=><TechnologiesItem tech={t} key={t.title} />)}
            </div>
        </div>
    );
};

