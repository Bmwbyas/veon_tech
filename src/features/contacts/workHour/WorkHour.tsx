import React, {useEffect} from 'react';
import s from "./WorkHour.module.scss"
import {workhourData} from "../data";

export const WorkHour = () => {
// useEffect(()=>{
    const getWeekDay=():string=> {
        const date=new Date()
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        return days[date.getDay()];

    }

// },[])

    return (
        <div>
            <div className={s.circleContainer}>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>

            </div>
            <div className={s.workHourContainer}>
                <div className={s.headrerWork}>Время работы:</div>
                <div className={s.hourWorkWrap}>
                    {workhourData.map((w, index) =>{
                        const classNameContainer=getWeekDay()===w.data?s.workHourItemContainer + ' ' +s.active: s.workHourItemContainer
                        return <div key={index} className={classNameContainer}>
                        <div>{w.day}</div>
                        <div>{w.time}</div>
                    </div>})}
                </div>
            </div>

        </div>
    );
};

