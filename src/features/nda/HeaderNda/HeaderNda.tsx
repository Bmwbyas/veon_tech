import React from 'react';
import s from './HeaderNda.module.scss'
import nda from "../../../assets/img/imgNDA/nda.png";

export const HeaderNda = () => {

    return (
        <div className={s.container}>
            <div className={s.desc}>
                <h1>НДА (Соглашение о неразглашении)</h1>
                <div className={s.text}>НДА — контракт, через который стороны соглашаются не раскрыть информацию, закрытую соглашением. NDA создает конфиденциальные отношения между сторонами, чтобы защитить любой тип конфиденциальной информации.</div>
            </div>
            <div className={s.photo}><img src={nda} alt="nda"/></div>
        </div>
    );
};


