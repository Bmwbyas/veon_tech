import React from 'react';
import {DType} from "../data";
import s from './TechnologiesItem.module.scss'

export type TechnologiesItemType={
    tech:DType
}

export const TechnologiesItem:React.FC<TechnologiesItemType> = ({tech}) => {
    const {title,img}=tech
    return (
        <div className={s.container}>
            <div className={s.img} style={img}></div>
            <div>{title}</div>
        </div>
    );
};

