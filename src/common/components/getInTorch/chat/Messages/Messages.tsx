import React from 'react';
import {messageData} from "./data";
import s from './Messages.module.scss'

export const Messages = () => {
    return (
        <div className={s.container}>
            {messageData.map((m,index)=><div key={index} className={s.messageContainer}>
                <div key={m.id} className={s.message} > {m.message} </div>
                <div className={s.time}>Отправлено в {m.time}</div>
            </div>)}
            <div className={s.sendMessageContainer}>
            <input  className={s.sendMessage} placeholder={'Введите ваше сообщение'}/> <span className={s.icon}></span>
            </div>
        </div>
    );
};

