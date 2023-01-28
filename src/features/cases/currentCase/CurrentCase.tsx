import React from 'react';
import s from './CurrentCase.module.scss'
import rentClub from '../../../assets/img/iconCases/rentClub.png'
import {Paragraph} from "../../../common/components/paragraph/Paragraph";
import rentImg from '../../../assets/img/imgCases/rentClub.png'
import {caseSimilar, taskWebData, workData} from "./data";
import ImageShow from "./ImageShow/ImageShow";
import {Title} from "../../../common/components/title/Title";
import {GetInTorchCase} from "./getInTorch/GetInTorchCase";


export const CurrentCase = () => {


    return (<>
            <Title header={'Кейсы по разработке сайтов'} desc={'главная > кейсы > кейсы по разработке сайтов'}/>
            <div className={s.casesContainer}>
                <h2 className={s.title}>Кейс по разработке маркетплейса для сервиса аренды вещей</h2>
                <section className={s.casesInfoContainer}>
                    <ul>
                        <li><img className={s.img} src={rentClub} alt="label"/></li>
                        <li> Услуга проекта: Создание маркетплейса</li>
                        <li> Клиент: NDA</li>
                        <li> Проект url: https://rentclub.pro</li>
                    </ul>
                    <ul>
                        <li className={s.aboutCompany}>О компании: ООО "Рент клаб" (под НДА)</li>
                        <li>Основные цели: Реализация кабинета сделки, смены статусов и возможное поведение
                            пользователей
                        </li>
                    </ul>
                </section>
                <section className={s.taskWebContainer}>
                    <div className={s.titleTask}>краткий бриф на разработку сайта</div>
                    <table>
                        <tbody className={s.wrapperCurrentDesc}>
                        {taskWebData.map((t: any, index) => {
                            return <tr key={index} className={s.taskWebDataContainer}>
                                <td className={s.name}>{t.name}</td>
                                <td className={s.value}>{t.value}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </section>
                <section className={s.descriptionContainer}>
                    <Paragraph title={'Обращение'}
                               description={'Заказчика очень беспокоил дизайн сайта . Предыдущий сайт Заказчик разрабатывал лично. Каждый цвет , шрифт , кнопку и тд . И задача стояла сделать ещё, так сказать, «круче». Для Заказчика важно восприятие визуальное, чтоб глазу было приятно смотреть и удобный интерфейс.'}/>
                    <div className={s.imgContainer}><img src={rentImg} alt="rentImg"/></div>

                    <Paragraph title={'Процесс разработки'}
                               description={'Мы начали работы следующим образом, у Заказчика было общее понимание по наполнению и дизайну! Была общая цветовая гамма ! Также полное понимание главной страницы! Заказчику было намного удобней просто на бумаге нарисовать расположение всех блоков, расписать чертеж, а мы уже на основании чертежа составили ТЗ. И работы все расписали по этапам. Совместно с заказчиком проработали структуру главной страницы и расположение элементов на сайте, создали уникальный дизайн, обработали изображения для каталога и наполнили сайт, проработали мобильную версию сайта и настроили корректное отображение элементов на всех устройствах.'}/>
                    <Paragraph title={'Результаты'}
                               description={'Благодаря тесному сотрудничеству и отличной обратной связи с заказчиком получился качественный сайт-каталог, который повышает лояльность клиентов и отличается от конкурентных сайтов своим индивидуальным дизайном.'}/>
                </section>
                <section className={s.workContainer}>
                    {workData.map((t: any, index) => {
                        return <ImageShow key={index} t={t}/>
                    })}


                </section>
                <GetInTorchCase/>
                <section>
                    <div className={s.simularHeader}>Похожие кейсы:</div>
                    <div className={s.simularCaseContainer}>

                        {caseSimilar.map((c: any) => {

                            const lastItem = c.id === 4
                            return <div key={c.id} className={s.simularCase} style={c.img}>
                                {lastItem && <div className={s.lastSimular}>
                                    Здесь может быть ваш проект
                                </div>}

                            </div>
                        })}

                    </div>
                </section>
            </div>
        </>
    );
};

