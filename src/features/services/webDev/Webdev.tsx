import React from 'react';
import s from './Webdev.module.scss'
import {HeaderDev} from "./headerWeb/HeaderDev";
import {MainMistakes} from "./mainMistakes/MainMistakes";
import {GetInTorchCase} from "../../cases/currentCase/getInTorch/GetInTorchCase";
import {WorkWithUs} from "./WorkWithUs/WorkWithUs";


const Webdev = () => {
    return (
        <div className={s.container}>
           <HeaderDev/>
            <MainMistakes/>
            <GetInTorchCase text={'Давайте обсудим'} firstSpan={'Ваш'} middleText={'проект'}/>
            <WorkWithUs/>
        </div>
    );
};

export default Webdev;
