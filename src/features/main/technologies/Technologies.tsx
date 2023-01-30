import React,{MouseEvent} from 'react';
import s from './Technologies.module.scss'
import {techData} from "./data";
import {TechnologiesItem} from "./technologiesItem/TechnologiesItem";

type TechType='frontend'|'developmentSoftware'|'dataBase'|'CMS'
export const Technologies = () => {
const [tech,setTech]=React.useState<TechType>('frontend')
const [active,setActive]=React.useState('frontend')
    const activeClass=s.nameTech+' '+s.active
    const activeCorrectFilter = (event:MouseEvent<HTMLButtonElement>) => {

    setActive(event.currentTarget.id);
        setTech(event.currentTarget.id as TechType)
    };

    return (
        <div className={s.container}>
            <h2 className={s.header}>Технологии, с которыми мы работаем</h2>
            <div className={s.namesTechnologies}>
                <button id={'frontend'} className={active==='frontend'?activeClass:s.nameTech } onClick={activeCorrectFilter}>Front-end разработка</button>
                <button id={'developmentSoftware'}  className={active==='developmentSoftware'?activeClass:s.nameTech } onClick={activeCorrectFilter}>Разработка По</button>
                <button id={'dataBase'} className={active==='dataBase'?activeClass:s.nameTech } onClick={activeCorrectFilter}>База данных</button>
                <button id={'CMS'} className={active==='CMS'?activeClass:s.nameTech } onClick={activeCorrectFilter}>CMS</button>
            </div>
            <div className={s.descContainer}>
                {techData[tech].map((t,index)=><TechnologiesItem tech={t} key={index} />)}
            </div>
        </div>
    );
};

