import React from 'react';
import s from "../Nav.module.scss";
import st from './AccordionItem/AccordionItem.module.scss'
import {DataType} from "../data";
import {AccordionItem} from "./AccordionItem/AccordionItem";

type AccordionType = {
    data: DataType[]
    mainRoute: string
    title: string
    showMenuHandler?:(e: React.MouseEvent<HTMLDivElement, MouseEvent>|React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void
}
const Accordion: React.FC<AccordionType> = ({data, title,showMenuHandler}) => {
    const [view, setView] = React.useState(false)
    const openViewHandler = () => {
        setView(true)
    }
    const closeViewHandler = () => {
        setView(false)
    }


    return (
        <>
            <div className={st.item} onClick={openViewHandler} onMouseOut={closeViewHandler}  onMouseOver={openViewHandler}>
                <span className={s.navItemTitle}>{title}</span>
                {view && <AccordionItem showMenuHandler={showMenuHandler} toggleViewHandler={closeViewHandler} data={data}/>}
            </div>

        </>
    );
};

export default Accordion;
