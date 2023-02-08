import React, {useState} from 'react';
import s from './ImageShow.module.scss'
import {ImageModal} from "../../../../common/components/ImageModal/ImageModal";
import {WorkDataType} from "../data";
import {Button} from "../../../../common/components/Button/Button";

type ImageShowType={

    t:WorkDataType
}
export const ImageShow:React.FC<ImageShowType> = ({t}) => {
    const [view,setView]=useState(false)

    return (
        <>
            <div className={s.work} style={t.img}>
                <div className={s.workWrapper}>
                    <div className={s.workTitle}>{t.title}</div>
                    <div className={s.workDesc}>{t.desc}</div>
                    <div className={s.buttonWork}> <Button name={'Подробнее'}/></div>
                </div>
            </div>
           <ImageModal src={t.src} alt={'image'} view={view} setView={setView}/>
        </>
    );
};

export default ImageShow;
