import React from 'react';
import s from './Button.module.scss'


type ButtonType={
    onClick?:()=>void
    name:string
}
export const Button:React.FC<ButtonType> = ({onClick,name}) => {
    return (
        <button className={s.button} onClick={onClick}>{name}</button>
    );
};

