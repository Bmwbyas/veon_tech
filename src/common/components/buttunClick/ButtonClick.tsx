import React from 'react';
import s from "./ButtonClick.module.scss";
import {Modal} from "../getInTorch/modal/Modal";
import {Button} from "../Button/Button";

type ButtonClickType={
    name:string

}
const ButtonClick:React.FC<ButtonClickType> = ({name}) => {

    const [view, setView] = React.useState(false)
    const openModal = () => {
        setView(true)
    }
    const closeModal=()=>{
        setView(false)
    }

    return (
        <>
            {name==='Заказать звонок'&& <button onClick={openModal} className={ s.button}>{name}</button>}
            {name==='Выбрать'&& <Button name={name} onClick={openModal}/>}
            {name==='Здесь может быть ваш проект'&&<div  className={s.lastSimular} onClick={openModal}>
                Здесь может быть ваш проект
            </div>}
            <Modal view={view} closeModal={closeModal}/>
        </>
    );
};

export default ButtonClick;
