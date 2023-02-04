import React from 'react';
import s from './HeaderDev.module.scss'

import logo from "../../../../assets/img/imgMain/logo.png";
import {FormComponent} from "../../../../common/components/getInTorch/modal/form/Form";

export const HeaderDev = () => {

    const [view, setView] = React.useState(false)
    const openModal = () => {
        setView(true)
    }
    const closeModal = () => {
        setView(false)
    }
    const showModal=view?s.containerModal:`${s.containerModal} ${s.noModal}`
    return (
        <div className={s.container}>

            <div className={s.h1}>Мы создаем уникальный сайт, который превращает посетителей в клиентов.<br/>

                <button className={s.button} onClick={openModal}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>

                    <div className={showModal}>
                        <div className={s.formContainer}><FormComponent closemodal={closeModal}/></div>
                    </div>

            </div>
            <div className={s.animation} >
             <img src={logo} alt={'logo'}/>
            </div>

        </div>
    );
};

