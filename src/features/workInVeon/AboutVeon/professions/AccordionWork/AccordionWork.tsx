import React, {useState} from 'react';
import s from './AccordionWork.module.scss'
import {proffessionsDataType} from "../data";
import {Button} from "../../../../../common/components/Button/Button";

type AccordionWorkType = {
    data: proffessionsDataType
}
export const AccordionWork: React.FC<AccordionWorkType> = ({data}) => {
    const [view, setView] = useState(false)
    const showVacancy=()=>{
        setView(!view)
    }
    return (
        <div className={s.container}>
            <div className={s.title} onClick={showVacancy}>
                {view?<span className={s.up}>^</span>:<span className={s.down}></span>}
                {data.title}
            </div>
            {view &&
                <div className={s.descContainer}>
                    <h2 className={s.header}>
                        Описание вакансии:
                    </h2>
                    <div>
                        {data.descVacancy}
                    </div>
                    <h2 className={s.header}>
                        Обязанности:
                    </h2>
                    <ul>
                        {data.resposibility.map((r,index)=><li key={index}>{r}</li>)}
                    </ul>
                    <h2 className={s.header}>
                        Требования:
                    </h2>
                    <ul>
                         {data.requirements.map((r,index)=><li key={index}>{r}</li>)}
                    </ul>

                    <h2 className={s.header}>
                        Минимальные знания, которые мы ждём от кандидата:
                    </h2>
                    <ul>
                        {data.knowledge.map((r,index)=><li key={index}>{r}</li>)}
                    </ul>
                    <h2 className={s.header}>
                        Будет преимуществом:
                    </h2>
                    <ul>
                        {data.advantage.map((r,index)=><li key={index}>{r}</li>)}
                    </ul>
                    <h2 className={s.header}>
                        Условия:
                    </h2>
                    <ul>
                        {data.terms.map((r,index)=><li key={index}>{r}</li>)}
                    </ul>
                    <Button  name={'Откликнуться'}/>
                </div>}

        </div>
    );
};

