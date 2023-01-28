import React from 'react';
import s from "./ReviewsContent.module.scss";
import {reviewData, reviewDataKey} from "./data";

const ReviewsContent = () => {
   const [value,setValue]=React.useState<reviewDataKey>('second')
    const className=value==='first'?s.change + ' ' + s.active:s.change
    const onClickHandler=(reviewValue:reviewDataKey)=>{

       setValue(reviewValue)

    }
    return (
        <>
            <div className={s.reviews}>
                <p className={s.rev}>Отзывы</p>
                <p className={s.desc}>{reviewData[value]}</p>
            </div>
            <div style={{textAlign: "center"}}> Curabitur ullamcorper ultricies nisi.</div>
            <div className={s.changeReview}>
                <button onClick={()=>setValue('first')} className={value==='first'?s.change + ' ' + s.active:s.change}></button>
                <button onClick={()=>setValue('second')} className={value==='second'?s.change + ' ' + s.active:s.change }></button>
                <button onClick={()=>setValue('three')} className={value==='three'?s.change + ' ' + s.active:s.change}></button>
                <button onClick={()=>setValue('fouth')} className={value==='fouth'?s.change + ' ' + s.active:s.change}></button>
            </div>
        </>
    );
};

export default ReviewsContent;