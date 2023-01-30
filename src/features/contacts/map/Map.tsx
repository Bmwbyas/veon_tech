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
                <div className={s.mapImg}>
                    <div className={s.map} style={mapImg}></div>
                </div>
            </div>
            <div className={s.getInTorchContainer}>
                <div className={s.getInTorchHeader}>Мы рады увидеть <span>Вашу</span> заявку!</div>
                <div className={s.text}>
                    Пожалуйста оставьте Ваши имя и телефон, мы будем счастливы помочь
                    Вам.
                </div>
                <form className={s.form}>
                    <input className={s.input} name="Name" id="name" placeholder="Ваше имя"/>
                    <input className={s.input} name="Phone" id="email" placeholder="+375(XX) XXX-XX-XX"/>
                    <div className={s.textareaWrapper}>
                        <textarea className={s.textarea} name="Message" id="message"
                                  placeholder="Сообщение"/>
                    </div>
                    <p className={s.p}>Нажимая на кнопку «Отправить», вы даете свое согласие на обработку
                        персональных данных
                        в соответствии с целями указанными в <span className={s.span}>Политике обработки персональных данных</span>
                    </p>
                    <div className={s.buttonCont}>
                        <button className={s.button} type={"submit"} name={'send message'}>ОТПРАВИТЬ</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

