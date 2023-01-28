import React from 'react';
import s from './Header.module.scss'
import {Nav} from "./nav/Nav";
import logo from './../../assets/img/logo.png'

export const Header = () => {
    const imgLogo = {
        backgroundImage: 'url(' + logo + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    }
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.headerContainer}>
                    <div className={s.imgContainer} style={imgLogo}></div>
                    <Nav/>
                </div>

            </div>
        </div>
    );
};

