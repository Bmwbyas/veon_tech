import React, {MouseEvent} from 'react';
import s from './MainMistakes.module.scss'
import {mistakeData} from "./data";

type TechType='01'|'02'|'03'|'04'

export const MainMistakes = () => {
    const [tech,setTech]=React.useState<TechType>('01')
    const [active,setActive]=React.useState('01')
    const activeClass=s.nameTech+' '+s.active
    const activeCorrectFilter = (event:MouseEvent<HTMLButtonElement>) => {

        setActive(event.currentTarget.id);
        setTech(event.currentTarget.id as TechType)
    };

    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <h2 className={s.h2}>4 основные ошибки при разработке сайта</h2>
                <div className={s.containerMistakes}>
                    <div className={s.namesTechnologies}>
                        <button id={'01'} className={active==='01'?activeClass:s.nameTech } onClick={activeCorrectFilter}><strong>01</strong> Отсутсвие чёткого призыва к действию</button>
                        <button id={'02'}  className={active==='02'?activeClass:s.nameTech } onClick={activeCorrectFilter}> <strong>02</strong> Отсутствие аналитики для измерения эффективности</button>
                        <button id={'03'} className={active==='03'?activeClass:s.nameTech } onClick={activeCorrectFilter}><strong>03</strong> Размытая информация о бренде</button>
                        <button id={'04'} className={active==='04'?activeClass:s.nameTech } onClick={activeCorrectFilter}><strong>04</strong>  Слабая поисковая оптимизация (SEO)</button>
                    </div>
                    <div className={s.descContainer}>
                        {mistakeData[tech].map((t,index)=><div key={index} className={s.mistake}>
                                <h2>{t.head}</h2>
                                <div>{t.text}</div>
                                <ul>{t.ul?.map((e,index)=><li key={index}>{e}</li>)}</ul>
                        </div>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

