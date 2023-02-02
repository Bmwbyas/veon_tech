import React from 'react';
import s from './AboutVeon.module.scss'
import {data} from "./data";
import {Proffesions} from "./professions/Proffesions";


export const AboutVeon = () => {
    return (
        <div className={s.container}>
            <div className={s.aboutUs}>Амбициозная и целеустремленная команда экспертов, с большим стремлением оказывать высококачественные услуги по интернет-маркетингу и веб-разработке. Если Вы желаете стать частью нашей команды, тогда отправляйте нам Ваше резюме на электронную почту sales@veon-tech.ru<br/>
                <br/>
                Если Вы ищете душевное место работы с классной атмосферой, приятными людьми и хорошей оплатой труда, то Вам в нашу команду!
            </div>
            <div className={s.workTime}>Мы работаем эффективно, поэтому у нас 7-часовой рабочий день!</div>
            <div className={s.descHeader}>Почему нужно работать именно в Veon-Tech?</div>
            <div className={s.desc}>
                {data.map(d=><div key={d.id} className={s.descItem}>
                    {d.desc}
                </div>)}
            </div>
            <Proffesions/>
        </div>
    );
};

