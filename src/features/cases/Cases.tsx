import React from 'react';
import {Title} from "../../common/components/title/Title";
import s from './Cases.module.scss'
import {CasesNav} from "./casesNav/CasesNav";
import {CasesContent} from "./casesContent/CasesContent";
import {Container} from "../../common/components/container/Container";

export const Cases = () => {
    return (
        <>
            <Title header={'Кейсы'} desc={'ГЛАВНАЯ > КЕЙСЫ'}/>
            <div className={s.container}>
                <CasesNav/>
                <CasesContent/>
            </div>
        </>
    );
};

