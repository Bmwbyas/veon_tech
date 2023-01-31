import React from 'react';
import s from './GetInTorch.module.scss'
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
            {!view&&<div className={s.Container}>
                    <button className={s.bth} onClick={openModal}>
                        <div className={s.header}>Пишите, отвечу лично-</div>
                        <div className={s.text}>Александр Иванцов, sales-manager</div>
                    </button>
                </div>
            }
            <Chat view={view} closeModal={closeModal}/>
        </>
    );
};

