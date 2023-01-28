import React from 'react';
import s from './Case.module.scss'
import {CasesDataType} from "../data";

type CaseType={
    data:CasesDataType
    index:number
}
export const Case:React.FC<CaseType> = ({data,index}) => {
    const {img,desc,title}=data
    const viev=typeof (img)==='string'
    return (
        <div className={s.container} key={index}>
            {viev?<div className={s.imgContainer} ><img className={s.img}  src={img} sizes="(max-width: 1800px) 500px" alt="d"/></div>:
                <div className={s.imgContainer} style={img}></div>
            }

            <div className={s.title}>{title}</div>
            <div className={s.desc}>{desc}</div>
        </div>

    );
};

