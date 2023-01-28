import React from 'react';
import s from './CasesAs.module.scss'
import {casesData} from "./data";
import {Case} from "./case/Case";

export const CasesAs = () => {
    return (
        <div className={s.container}>
            <h2 className={s.header}>
                <span className={ s.span}>МЫ РУЧАЕМСЯ ЗА КАЧЕСТВО</span><br/>
                НАШИ КЕЙСЫ
            </h2>
            <div className={s.cases}>
                {casesData.map((c,index)=><Case key={index} index={index} data={c} />)}
            </div>
        </div>
    );
};

