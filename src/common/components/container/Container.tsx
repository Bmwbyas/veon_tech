import React from 'react';
import s from './Container.module.scss'

type ContainerType={
    children:React.ReactNode
}
export const Container:React.FC<ContainerType> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

