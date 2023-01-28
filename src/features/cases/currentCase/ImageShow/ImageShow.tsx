import React, {useState} from 'react';
import s from './ImageShow.module.scss'
import {ImageModal} from "../../../../common/components/ImageModal/ImageModal";
import {WorkDataType} from "../data";

type ImageShowType={

    t:WorkDataType
}
export const ImageShow:React.FC<ImageShowType> = ({t}) => {
    const [view,setView]=useState(false)
    const showImg=()=>{
        setView(!view)
    }
    return (
        <>
            <div className={s.work} style={t.img}>
                <div className={s.workWrapper}>
                    <div className={s.workTitle}>{t.title}</div>
                    <div className={s.workDesc}>{t.desc}</div>
                    <button className={s.buttonWork} onClick={showImg} >Показать изображение</button>
                </div>
            </div>
           <ImageModal src={t.src} alt={'image'} view={view} setView={setView}/>
        </>
    );
};

export default ImageShow;