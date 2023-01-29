import React from 'react';
import s from "./WorkHour.module.scss"
import {workhourData} from "../data";

export const WorkHour = () => {
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
                    {workhourData.map((w, index) => <div key={index} className={s.workHourItemContainer}>
                        <div>{w.day}</div>
                        <div>{w.time}</div>
                    </div>)}
                </div>
            </div>

        </div>
    );
};

