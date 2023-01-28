import React from 'react';
import s from './Chat.module.scss'
import {Messages} from "./Messages/Messages";

type ChatType={
    closeModal:()=>void
}
export const Chat:React.FC<ChatType> = ({closeModal}) => {
    return (
        <div className={s.container}>
            <div className={s.btnCont}>
                <button className={s.bth} >
                    <div className={s.header}>Пишите, отвечу лично-</div>
                    <div className={s.text}>Александр Иванцов, sales-manager</div>
                </button>
            </div>
            <div className={s.content}>
                <Messages/>
            </div>
        </div>
    );
};

