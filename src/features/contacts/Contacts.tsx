import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../../common/components/title/Title";
import {contactData} from "./data";

import {WorkHour} from "./workHour/WorkHour";
import {Map} from "./map/Map";
import {Requisites} from "./Requisites/Requisites";


export const Contacts = () => {

    return (<>
            <Title header={'Контакты'} desc={'ГЛАВНАЯ > КОНТАКТЫ'}/>
            <div className={s.container}>
                <div className={s.contactContainer}>
                    {contactData.map((c, index) => <div className={s.itemContainer} key={index}>
                        <div className={s.icon} style={c.icon}></div>
                        <div className={s.headerItem}>{c.header}</div>
                        <div className={s.descItem}>{c.desc}</div>
                        <div className={s.contct}>{c.contct}</div>
                    </div>)}
                </div>
               <WorkHour/>
                <Map/>
                <Requisites/>
            </div>
        </>

    );
};

