import React, {useEffect, useState} from 'react';
import s from './ImageModal.module.scss'

type ImageModalType={
    src:string
    alt:string
    view:boolean
    setView:(view:boolean)=>void
}

export const ImageModal:React.FC<ImageModalType> = ({src,alt,view,setView}) => {


    const showModal=()=>{
        setView(!view)
    }
    const changeClass=view?s.modal+' '+s.showModal:s.modal
    return (
        <div className={changeClass} onClick={showModal}>
            <img className={s.img} src={src} alt={alt}/>
        </div>
    );
};

