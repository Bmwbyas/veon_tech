import React from 'react';
import {NavLink} from "react-router-dom";
import s from './AccordionItem.module.scss'
import {DataType} from "../../data";

type AccordionItemType = {
    data: DataType[]
    toggleViewHandler:()=>void
}
export const AccordionItem: React.FC<AccordionItemType> = ({data,toggleViewHandler}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {data.map((item, index) =>
                    <NavLink className={s.item} onClick={toggleViewHandler} key={index} to={item.route}>{item.title}</NavLink>)}
            </div>
        </div>
    );
};

