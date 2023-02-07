import React from 'react';
import s from './BonusesSection.module.scss'
import {bonusesData} from "./data";
import ButtonClick from "../../../common/components/buttunClick/ButtonClick";

export const BonusesSection = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {bonusesData.map(b => <div key={b.id} className={s.bonusesItemContainer}>

                    <div className={s.numberItem}>{b.id}</div>
                    <div className={s.iconContainer}>
                        <div className={s.icon} style={b.icon}></div>
                    </div>
                    <div className={s.headerItem}>{b.header}</div>
                    <div className={s.secondHeaderItem}>{b.secondHeader}</div>
                    <div className={s.text}>{b.text}</div>
                    <div className={s.desc}>{b.desc}</div>
                    <div className={s.buttonCont}>
                        <ButtonClick name={'Выбрать'}/>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

