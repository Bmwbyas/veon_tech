import React from 'react';
import s from "./ButtonClick.module.scss";
import {Modal} from "../../../../common/components/getInTorch/modal/Modal";

const ButtonClick = () => {
    const [view, setView] = React.useState(false)
    const openModal = () => {
        setView(true)
    }
    const closeModal=()=>{
        setView(false)
    }

    return (
        <>
            <button onClick={openModal} className={ s.button}>Заказать звонок</button>
            <Modal view={view} closeModal={closeModal}/>
        </>
    );
};

export default ButtonClick;