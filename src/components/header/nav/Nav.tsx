import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../../../features/routes/routes";

import {servicesData} from "./data";
import Accordion from "./accordion/Accordion";
import ButtonClick from "./buttunClick/ButtonClick";

export const Nav = () => {
    return (

        <div className={s.navContainer}>

            <NavLink className={s.navItem} to={routes.main}>

                <span className={s.navItemTitle}>главная</span>
            </NavLink>
            <NavLink className={s.navItem} to={routes.aboutUs}>

                <span className={s.navItemTitle}>О НАС</span>
            </NavLink>
            {/*<div className={s.navItem}>*/}
            {/*   <Accordion data={aboutUsData} title={'О НАС'} mainRoute={routes.aboutUs}  />*/}
            {/*</div>*/}
            <NavLink to={routes.cases} className={s.navItem}  >
                <span className={s.navItemTitle}>кейсы</span>
            </NavLink>
            <div className={s.navItem}>
                <Accordion data={servicesData} title={'УСЛУГИ'} mainRoute={routes.services}  />
            </div>
            <NavLink className={s.navItem} to={routes.bonuses}>
                <span className={s.navItemTitle}>бонусы</span>
            </NavLink>
            <NavLink className={s.navItem} to={routes.contacts}>
                <span className={s.navItemTitle}>контакты</span>
            </NavLink>
            <ButtonClick/>

        </div>


    );
};

