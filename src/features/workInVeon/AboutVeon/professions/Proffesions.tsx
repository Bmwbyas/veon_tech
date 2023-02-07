import React from 'react';
import s from './Professions.module.scss'
import {proffessionsData} from "./data";
import {AccordionWork} from "./AccordionWork/AccordionWork";

export const Proffesions = () => {
    return (<>
        <div className={s.container}>
            {proffessionsData.map((data,index)=><AccordionWork key={index} data={data}/>)}

        </div>

        </>
    );
};

