import React from 'react';
import s from "../Nav.module.scss";
import st from './AccordionItem/AccordionItem.module.scss'
import {DataType} from "../data";
import {AccordionItem} from "./AccordionItem/AccordionItem";

type AccordionType = {
    data: DataType[]
    mainRoute: string
    title: string
}
const Accordion: React.FC<AccordionType> = ({data, title}) => {
    const [view, setView] = React.useState(false)
    const openViewHandler = () => {
        setView(true)
    }
    const closeViewHandler = () => {
        setView(false)
    }


    return (
        <>
            <div className={st.item} onMouseOut={closeViewHandler}  onMouseOver={openViewHandler}>
                <span className={s.navItemTitle}>{title}</span>
                {view && <AccordionItem toggleViewHandler={closeViewHandler} data={data}/>}
            </div>

        </>
    );
};

export default Accordion;