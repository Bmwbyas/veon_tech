import React from 'react';
import {NavLink} from "react-router-dom";
import s from './CasesNav.module.scss'
import {routes} from "../../routes/routes";

export const CasesNav = () => {
    return (
        <div className={s.container}>
           <NavLink className={s.nav} to={routes.cases}>ВСЕ</NavLink>
           <div className={s.dash}></div>
            <NavLink className={s.nav+' '+s.active} to={routes.cases}>ИНТЕРНЕТ-МАГАЗИНЫ</NavLink>
            <div className={s.dash}></div>
            <NavLink className={s.nav} to={routes.cases}>ИНТЕРНЕТ-КАТАЛОГИ</NavLink>
            <div className={s.dash}></div>
            <NavLink className={s.nav} to={routes.cases}>КОРПОРАТИВНЫЕ САЙТЫ</NavLink>
            <div className={s.dash}></div>
            <NavLink className={s.nav} to={routes.cases}>САЙТ-ВИЗИТКИ</NavLink>
        </div>
    );
};

