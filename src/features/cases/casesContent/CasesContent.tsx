import React from 'react';
import s from './CasesContent.module.scss'
import {casesData} from "./data";
import {NavLink} from "react-router-dom";

type CasesContentType = {
    filter: any
}
export const CasesContent: React.FC<CasesContentType> = ({filter}) => {


    return (
        <div className={s.s}>

            <div className={s.container}>
                {casesData[filter].map((c: any) =>
                    <NavLink className={s.imgWrapper} key={c.id} to={c.routes}>
                        <div className={s.imgContainer} >
                            <img className={s.img} src={c.img} alt={c.routes}/>
                        </div>
                        <div className={s.hower}>
                            <div className={s.workTitle}>Разработка сайтов</div>
                            <div className={s.workDesc}>Какая-то страница с сайта кейса.Безусловно очень важная</div>
                            <button className={s.buttonWork}>Показать изображение</button>
                        </div>
                    </NavLink>)}
            </div>

            <button className={s.btn}><span className={s.span}>ПРОДОЛЖИТЬ </span></button>
        </div>

    );
};

