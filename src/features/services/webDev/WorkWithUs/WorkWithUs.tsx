import React from 'react';
import s from './WorkWithUs.module.scss'
import {Item} from "./Item/Item";

type WorkWithUs={
    workWithUS:any[],
    header:string
}
export const WorkWithUs:React.FC<WorkWithUs> = ({workWithUS,header}) => {
    return (
        <div className={s.container}>
            <h2 className={s.h2}>{header}</h2>
            <div className={s.dev}>
                {workWithUS.map((item, index) => <Item key={index} D={item}/>)}
            </div>
        </div>
    );
};

