import React from 'react';
import s from './DescriptionWeb.module.scss'
import {devData} from "./data";
import {CurrentDev} from "./currentDev/CurrentDev";

export const DescriptionWeb = () => {

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
            <div className={s.desc}>
                <h2 className={s.head}><span className={s.span}>WEB-студия</span> <br/> полного цикла</h2>
                <p className={s.p}>Команда профессиональных специалистов VEON-TECH предоставляет широкий спектр услуг в области
                    веб-разработки: лидогенерация, поисковая SEO оптимизация, контекстная реклама, таргетированная реклама в
                    социальных сетях, создание и правка сайтов, управление репутацией, настройка и внедрение CRM, написание
                    продающих текстов, наполнение веб-сайтов, технические и юзабилити аудиты, брендинг и дизайн.</p>
                <p className={s.p}>Digital агентство VEON-TECH предлагает комплексную стратегию в формате performance marketing.
                    Понимаем цели каждого клиента и подбираем инструменты для их достижения. Работаем на успешность и результат для
                    вашего бизнеса. Готовы помочь увеличить узнаваемость бренда, привлечь целевых посетителей, обеспечить рост количества
                    звонков и заявок.</p>
            </div>
            <div className={s.dev}>
                {devData.map((d,index)=><CurrentDev key={index} D={d}/>)}
            </div>
            </div>
        </div>
    );
};

