import React from 'react';
import s from './Webdev.module.scss'
import {HeaderDev} from "./headerWeb/HeaderDev";
import {MainMistakes} from "./mainMistakes/MainMistakes";
import {GetInTorchCase} from "../../cases/currentCase/getInTorch/GetInTorchCase";
import {WorkWithUs} from "./WorkWithUs/WorkWithUs";
import {DevSites} from "./DevSites/DevSites";
import {stageDev, workWithUS} from "./WorkWithUs/data";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "../../main/contact/Contact";


const Webdev = () => {
    return (
        <div className={s.container}>
           <HeaderDev/>
            <MainMistakes/>
            <GetInTorchCase text={'Давайте обсудим'} firstSpan={'Ваш'} middleText={'проект'}/>
            <WorkWithUs workWithUS={workWithUS} header={'Почему работать с нами удобно и выгодно?'}/>
            <DevSites/>
            <WorkWithUs workWithUS={stageDev} header={'Этапы разработки и создания сайта'}/>
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default Webdev;
