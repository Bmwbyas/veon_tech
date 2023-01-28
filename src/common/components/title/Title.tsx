import React from 'react';
import s from './Title.module.scss'

type TitleType ={
  header:string
  desc:string
}
export const Title:React.FC<TitleType> = ({header,desc}) => {

    return (
        <div className={s.titleContainer}>
            <div className={s.titleWrapper}>
                <h2 className={s.titleV}>{header}</h2>
                <div className={s.breadcrumb}>{desc}</div>
            </div>
        </div>
    );
};

