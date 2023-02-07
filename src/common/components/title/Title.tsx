import React from 'react';
import s from './Title.module.scss'
import case2 from "../../../assets/img/imgTitle.png";

type TitleType = {
    header: string
    desc: string
}
export const Title: React.FC<TitleType> = ({header, desc}) => {
    const imgBG = {
        backgroundImage: 'url(' + case2 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={s.wrap}  style={imgBG}>
            <div className={s.titleContainer} >
                <div className={s.titleWrapper} >
                    <h2 className={s.titleV}>{header}</h2>
                    <div className={s.breadcrumb}>{desc}</div>
                </div>
            </div>
        </div>
    );
};

