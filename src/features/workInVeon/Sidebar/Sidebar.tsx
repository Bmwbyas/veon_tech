import React, {MouseEvent, useState} from 'react';
import s from './Sidebar.module.scss'

export const Sidebar = () => {
    const [nav,setNav]=useState<'1'|'2'|'3'|'4'>('2')

    const activeCorrectFilter = (event:MouseEvent<HTMLDivElement>) => {


        setNav(event.currentTarget.id as '1'|'2'|'3'|'4')
    };

    return (
        <div className={s.container}>
            <div className={s.navBlock}>
                <div id={'1'} className={nav==='1'?s.navItem+' '+s.activeNav:s.navItem}  onClick={activeCorrectFilter}>О нашей компании</div>
                <div id={'2'} className={nav==='2'?s.navItem +' '+s.activeNav:s.navItem} onClick={activeCorrectFilter}>Работа в Veon-Tech</div>
                <div id={'3'} className={nav==='3'?s.navItem+' '+s.activeNav:s.navItem} onClick={activeCorrectFilter}>Отзывы клиентов</div>
                <div id={'4'} className={nav==='4'?s.navItem+' '+s.activeNav:s.navItem} onClick={activeCorrectFilter}>Популярные вопросы</div>
            </div>
            <div className={s.respond}>
                <div className={s.respondHeader}>Откликнуться</div>
                <div className={s.respondDesc}>
                    Пожалуйста вышлите Ваше резюме на контактный e-mail указанный ниже. Мы рассмотрим Вашу кандидатуру и дадим ответ в течение 3-5 рабочих дней.
                </div>
                <div className={s.email}>
                    sales@veon-tech.ru
                </div>
            </div>
            <div className={s.cv}>
                <div className={s.cvHeader}>
                    Нет бланка резюме? <br/>Поможем!
                </div>
                <div className={s.cvContent}>
                    Чистый бланк резюме для заполнения
                </div>
            </div>
        </div>

    )
}

