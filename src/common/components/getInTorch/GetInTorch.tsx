import React from 'react';
import s from './GetInTorch.module.scss'
import {Modal} from "./modal/Modal";
import {Chat} from "./chat/Chat";

export const GetInTorch = () => {
    const [view, setView] = React.useState(false)
    const openModal = () => {
        setView(true)
    }
    const closeModal = () => {
        setView(false)
    }
    return (<>
            {view
                ? <Chat closeModal={closeModal}/>
                : <div className={s.Container}>
                    <button className={s.bth} onClick={openModal}>
                        <div className={s.header}>Пишите, отвечу лично-</div>
                        <div className={s.text}>Александр Иванцов, sales-manager</div>
                    </button>
                </div>
            }
        </>
    );
};

