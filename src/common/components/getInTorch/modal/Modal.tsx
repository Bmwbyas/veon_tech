import React from 'react';
import s from './Modal.module.scss'
import {FormComponent} from "./form/Form";

export type ModalType={
    closeModal:()=>void
    view:boolean
}

export const Modal:React.FC<ModalType> = ({closeModal,view}) => {
    const showModal=view?s.container:`${s.container} ${s.noModal}`
    return (
        <div  className={showModal}>
            <div  className={s.containerForm}>
                <FormComponent  closemodal={closeModal}/>
            </div>
        </div>
    );
};

