import React from 'react';
import s from './Paragraph.module.scss'
type ParagraphType={
    title:string
    description:string
}
export const Paragraph:React.FC<ParagraphType> = ({title,description}) => {
    return (
        <div className={s.div}> <span className={s.span}>{title}:</span><br/>
            {description}
        </div>
    );
};

