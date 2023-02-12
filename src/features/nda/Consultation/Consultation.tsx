import React from 'react';
import s from './Consultation.module.scss'
import {Button} from "../../../common/components/Button/Button";
import logo from "../../../assets/img/logo.png";
import {Modal} from "../../../common/components/getInTorch/modal/Modal";

export const Consultation = () => {
    const [view, setView] = React.useState(false)

    const openModal = () => {
        setView(true)
    }
    const closeModal = () => {
        setView(!view)

    }
    return (
        <div className={s.container}>

            <div className={s.head}>
                <h2>Нужна консультация?</h2>
                <p>Готовы предоставить полную консультацию по условиям и
                    всем интересующим вопросам работы с нашей компанией!
                </p>
            </div>
            <div className={s.logoContainer}>
                <div className={s.logo}><img className={s.img} src={logo} alt="logo"/></div>
                <div><Button name={"Получить консультацию"} onClick={openModal}/></div>
                <Modal closeModal={closeModal} view={view}/>
            </div>
            <div className={s.logoContainer}>
                +7(995)577-51-63<br/>
                sales@veon-tech.ru
            </div>
        </div>
    );
};

