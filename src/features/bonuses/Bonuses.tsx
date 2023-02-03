import React from 'react';
import s from './Bonuses.module.scss'
import {Title} from "../../common/components/title/Title";
import {BonusesSection} from "./bonusesSection/BonusesSection";


export const Bonuses = () => {
    return (<>
            <Title header={'Бонусы'} desc='ГЛАВНАЯ > БОНУСЫ'/>
            <div className={s.container}>
                <div className={s.header}>
                    Бонусы и скидки на разработку. Программа лояльности для клиентов компании VEON-TECH.
                </div>
                <div className={s.textHeader}>
                    При работе с нами вы получите дополнительные опции для развития Вашего бизнеса. Улучшаем ваш бизнес
                    вместе !
                </div>
                <div className={s.headerBonus}>Выберите <span>свой</span> бонус!</div>
            </div>
            <BonusesSection/>
        <div className={s.container}>
            <div className={s.descVeon}>Для команды VEON-TECH клиенты – на первом месте. Нам нравится заботиться о своих клиентах, поэтому мы рекомендуем подходить к разработке комплексно, использовать максимальное количество существующих инструментов с учетом специфики бренда. Наша команда подготовила для вас уникальные бонусы по всем категориям инструментов интернет-разработки для еще более успешного продвижения вашей компании!<br/><br/>
                Выбирайте подходящий под ваши конкретные цели бонус и воспользуйтесь им, повышайте ваши результативные показатели без лишних затрат.</div>
        </div>
        </>
    );
};

