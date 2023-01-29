import React from 'react';
import s from './Map.module.scss'
import map from "../../../assets/img/iconContacts/map.png";

export const Map = () => {
    const mapImg = {
        backgroundImage: 'url(' + map + ')',
        // backgroundSize: 'contain',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={s.wrapContacts}>
            <div className={s.mapContainer}>
                <div className={s.mapHeader}><span>РАСПОЛОЖЕНИЕ</span> Нашего Офиса</div>
                <div className={s.map} style={mapImg}></div>
            </div>
            <div className={s.getInTorchContainer}>
                <div className={s.getInTorchHeader}>Мы рады увидеть <span>Вашу</span> заявку!</div>
                <div className={s.text}>
                    Пожалуйста оставьте Ваши имя и телефон, мы будем счастливы помочь
                    Вам.
                </div>
            </div>
        </div>
    );
};

