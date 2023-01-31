import React from 'react';
import s from "./GetInTorchCases.module.scss";
import {Modal} from "../../../../common/components/getInTorch/modal/Modal";

export const GetInTorchCase = () => {
    const [view, setView] = React.useState(false)
    const openModal = () => {
        setView(true)
    }
    const closeModal=()=>{
        setView(false)
    }
    return (
        <div className={s.wrap}>
        <section className={s.decsContainer}>
            <div>ХОТИТЕ <span className={s.textDesc}>ТАК ЖЕ? </span>МЫ <span>ПОМОЖЕМ!</span></div>
            <button onClick={openModal}  className={s.buttonDesc}>Заказать звонок</button>
            {view && <Modal view={false} closeModal={closeModal} />}
        </section>
        </div>
    );
};

