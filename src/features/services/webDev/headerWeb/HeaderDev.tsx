import React from 'react';
import s from './HeaderDev.module.scss'


import {FormComponent} from "../../../../common/components/getInTorch/modal/form/Form";
type HeaderDevType={
    header:string
    text:string
    img:string
}
export const HeaderDev:React.FC<HeaderDevType> = ({header,text,img}) => {

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

            <div className={s.descContainer}>
                <div className={s.h1}>{header}</div>
                <div className={s.paragrah}>{text}</div>

                <button className={s.button} onClick={openModal}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>

                    <div className={showModal}>
                        <div className={s.formContainer}><FormComponent closemodal={closeModal}/></div>
                    </div>

            </div>
            <div className={s.animation} >
             <img src={img} alt={'logo'}/>
            </div>

        </div>
    );
};

