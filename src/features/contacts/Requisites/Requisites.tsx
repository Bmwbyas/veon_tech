import React from 'react';
import s from './Requisites.module.scss'
import pdf from "../../../assets/img/iconContacts/pdf.png";

export const Requisites = () => {
    const pdfImg = {
        backgroundImage: 'url(' + pdf + ')',
        // backgroundSize: 'contain',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={s.container}>
            <div className={s.textContainer}>
                <div className={s.textHeader}>Реквизиты</div>
                <div className={s.text}>
                    Общество с ограниченной ответственностью «Веон-консалт»<br/>
                    Адрес: РБ, 220053, Г. МИНСК, УЛ. ОРЛОВСКАЯ, Д. 40А, ОФИС 40-1<br/>
                    УНП: 193082231<br/>
                    Банковские реквизиты: BY42ALFA30122354480050270000 в BYN<br/>
                    BY27ALFA30122354480060270000 в USD<br/>
                    BY57ALFA30122354480040270000 в EUR<br/>
                    BY05ALFA30122354480010270000 в RUB<br/>
                    в ЗАО 'Альфа-Банк',<br/>
                    БИК: ALFABY2X<br/>
                    clients@veon-tech.ru
                </div>
            </div>
            <div className={s.imgContainer}>
                <div className={s.img} style={pdfImg}> </div>
                <button className={s.button}>Скачать PDF</button>
            </div>
        </div>
    );
};

