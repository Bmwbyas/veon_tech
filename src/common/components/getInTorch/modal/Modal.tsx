import React from 'react';
import s from './Modal.module.scss'
import {FormComponent} from "./form/Form";

export type ModalType={
    closeModal:()=>void
}

export const Modal:React.FC<ModalType> = ({closeModal}) => {

    return (
        <div  className={s.container}>
            <div  className={s.containerForm}>
                <FormComponent  closemodal={closeModal}/>
            </div>
        </div>
    );
};

