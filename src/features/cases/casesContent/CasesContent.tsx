import React from 'react';
import s from './CasesContent.module.scss'
import {casesData} from "./data";
import {NavLink} from "react-router-dom";

export const CasesContent = () => {
    return (
        <div className={s.s}>
            <div className={s.container}>
                {casesData.map((c, index) =>
                    <NavLink key={index} to={c.routes}>
                        <div  className={s.imgContainer}>
                            <img className={s.img} src={c.img} alt={c.routes}/>
                        </div>
                    </NavLink>)}
            </div>

            <button className={s.btn}><span className={s.span}>ПРОДОЛЖИТЬ </span></button>
        </div>

    );
};

