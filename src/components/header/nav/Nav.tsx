import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../../../features/routes/routes";

import {aboutUsData, servicesData} from "./data";
import Accordion from "./accordion/Accordion";
import ButtonClick from "../../../common/components/buttunClick/ButtonClick";
export type NavType={
    showMenuHandler?:(e: React.MouseEvent<HTMLDivElement, MouseEvent>|React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void
}
export const Nav:React.FC<NavType> = ({showMenuHandler}) => {
    return (

        <div className={s.navContainer}>

            <NavLink onClick={showMenuHandler} className={s.navItem} to={routes.main}>

                <span className={s.navItemTitle}>главная</span>
            </NavLink>
            {/*<NavLink className={s.navItem} to={routes.aboutUs}>*/}

            {/*    <span className={s.navItemTitle}>О НАС</span>*/}
            {/*</NavLink>*/}
            <div className={s.navItem}>
               <Accordion showMenuHandler={showMenuHandler} data={aboutUsData} title={'О НАС'} mainRoute={routes.aboutUs}  />
            </div>
            <NavLink onClick={showMenuHandler} to={routes.cases} className={s.navItem}  >
                <span className={s.navItemTitle}>кейсы</span>
            </NavLink>
            <div className={s.navItem}>
                <Accordion showMenuHandler={showMenuHandler} data={servicesData} title={'УСЛУГИ'} mainRoute={routes.services}  />
            </div>
            <NavLink onClick={showMenuHandler} className={s.navItem} to={routes.bonuses}>
                <span className={s.navItemTitle}>бонусы</span>
            </NavLink>
            <NavLink  onClick={showMenuHandler} className={s.navItem} to={routes.contacts}>
                <span className={s.navItemTitle}>контакты</span>
            </NavLink>
            <ButtonClick name={'Заказать звонок'}/>

        </div>


    );
};

