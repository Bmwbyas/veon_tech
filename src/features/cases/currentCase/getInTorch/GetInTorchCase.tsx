import React from 'react';
import s from "./GetInTorchCases.module.scss";
import {Modal} from "../../../../common/components/getInTorch/modal/Modal";

type GetInTorchCaseType={
    text?:string
    firstSpan?:string
    middleText?:string
    secondSpan?:string
    afterText?:string
}
export const GetInTorchCase:React.FC<GetInTorchCaseType> = ({text,firstSpan,secondSpan,middleText,afterText}) => {
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
            <div className={s.headerText}>{text} <span className={s.textDesc}>{firstSpan} </span>{middleText} <span>{secondSpan}</span>{afterText}</div>
            <button onClick={openModal}  className={s.buttonDesc}>Заказать звонок</button>
            <Modal view={view} closeModal={closeModal}/>
        </section>
        </div>
    );
};

