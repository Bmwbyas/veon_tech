import React from 'react';
import {NavLink} from "react-router-dom";
import s from './AccordionItem.module.scss'
import {DataType} from "../../data";

type AccordionItemType = {
    data: DataType[]
    toggleViewHandler:()=>void
    showMenuHandler?:(e: React.MouseEvent<HTMLDivElement, MouseEvent>|React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void
}
export const AccordionItem: React.FC<AccordionItemType> = ({data,toggleViewHandler, showMenuHandler}) => {
    // const viewContent=(e: React.MouseEventHandler<HTMLAnchorElement> )=>{
    //     showMenuHandler(e)
    //     toggleViewHandler()
    // }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {data.map((item, index) =>
                    <NavLink className={s.item} onClick={showMenuHandler} key={index} to={item.route}>{item.title}</NavLink>)}
            </div>
        </div>
    );
};

