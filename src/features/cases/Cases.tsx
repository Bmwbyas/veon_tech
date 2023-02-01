import React from 'react';
import {Title} from "../../common/components/title/Title";
import s from './Cases.module.scss'
import {Content} from "./Content/Content";

export const Cases = () => {
    return (
        <>
            <Title header={'Кейсы'} desc={'ГЛАВНАЯ > КЕЙСЫ'}/>
            <div className={s.container}>
                <Content/>
            </div>
        </>
    );
};

