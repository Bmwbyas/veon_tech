import React from 'react';
import s from './Chat.module.scss'
import {Messages} from "./Messages/Messages";

type ChatType = {
    closeModal: (e: any) => void
    view: boolean
}
export const Chat: React.FC<ChatType> = ({closeModal, view, }) => {
    const showModal = view ? s.container : `${s.container} ${s.noModal}`

    return (

        <div className={showModal}><span className={s.close}  onClick={closeModal}>x</span>
            <div className={s.btnCont}>
                <button className={s.bth}>
                    <div className={s.header}>Пишите, отвечу лично-</div>
                    <div className={s.text}>Ксения, специалист по работе с клиентами</div>
                </button>
            </div>
            <div className={s.content}>
                <Messages/>
            </div>
        </div>
    );
};

