import React from 'react';
import s from './HeaderMain.module.scss'
import {FormComponent} from "../../../common/components/getInTorch/modal/form/Form";

export const HeaderMain = () => {
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

            <div className={s.h1}>Создаем сайты лучше <br/> <span className={s.text}>чем у конкурентов</span>
                <p className={s.paragrah}>Создаем по-настоящему эффективные сайты: внедряем актуальные<br/> IT
                    разработки, уделяем максимум внимание дизайну и юзабилити</p>
                <button className={s.button} onClick={openModal}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>

                    <div className={showModal}>
                        <div className={s.formContainer}><FormComponent closemodal={closeModal}/></div>
                    </div>

            </div>
            <div className={s.animation}>
                ANIMATION
            </div>

        </div>
    );
};

