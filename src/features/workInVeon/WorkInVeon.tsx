import React from 'react';
import {Title} from "../../common/components/title/Title";
import {AboutVeon} from "./AboutVeon/AboutVeon";
import {Sidebar} from "./Sidebar/Sidebar";
import s from './WorkInVeon.module.scss'

export const WorkInVeon = () => {
    return (
        <div>
            <Title header={'Работа в Veon-Tech'} desc={'ГЛАВНАЯ > РАБОТА В VEON TECH'}/>
            <div className={s.container}>
                <div className={s.content}>
                    <AboutVeon/>
                </div>
                <div className={s.sidebar}>
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

