import React from 'react';
import {Title} from "../../common/components/title/Title";
import s from './AboutUs.module.scss'
import {DescriptionAboutUs} from "./DescriptionAboutUs/DescriptionAboutUs";
import {Reviews} from "../main/reviews/Reviews";

export const AboutUs = () => {
    return (
        <div className={s.aboutUsContainer}>
            <Title header={'О компании VEON-TECH'} desc={'ГЛАВНАЯ > О КОМПАНИИ'}/>
            <div className={s.wrapper}>
                <div className={s.desc}> <span>VEON-TECH</span> - это не просто маркетинговое агентство – это команда единомышленников! У нас не потоковое агентство,
                    у нас нет текучки и мы настроены на долгосрочные отношения и с клиентами, и с коллегами. Выполняем заказы качественно и в срок!
                    Название нашей компании VEON-TECH, часть нейминга переводится с английского как серебряный и это символично! Для нас на первом месте
                    стоят наши клиенты, команда и партнёры, ведь наши клиенты, команда и партнёры – это наше золото. Наша философия заключается в том,
                    что если будет достаток и удовлетворение от нашей работы,
                    то значит наша работа продела на отлично и мы также будем довольны. Принцип нашей работы Слово = Дело.
                </div>
                <div className={s.hr}></div>
                <DescriptionAboutUs/>
            </div>
                {/*<Technologies/>*/}
                <Reviews/>


        </div>
    );
};

