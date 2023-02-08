import React from 'react';
import s from './DevSites.module.scss'
import {dataDevSites} from "./data";
import {Button} from "../../../../common/components/Button/Button";


export const DevSites = () => {
    return (
        <div className={s.container}>
          <h2 className={s.h2}>Разработка сайтов под ключ</h2>
            <div className={s.devContainer}>
                {dataDevSites.map((item,index)=>{
                    return <div className={s.itemContainer} key={index}>
                        <div className={s.img} style={item.img}></div>
                        <div className={s.desc}>{item.header}</div>
                       <div className={s.buttonContainer}> <Button name={'Подробнее'}/></div>
                    </div>
                })}
            </div>
        </div>
    );
};

