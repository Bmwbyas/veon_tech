import React from 'react';
import s from './CasesContent.module.scss'
import {casesData} from "./data";
import {NavLink} from "react-router-dom";
import {Button} from "../../../common/components/Button/Button";

type CasesContentType = {
    filter: any
}
export const CasesContent: React.FC<CasesContentType> = ({filter}) => {


    return (
        <div className={s.s}>

            <div className={s.container}>
                {casesData[filter].map((c: any) => {
                    const img = {
                        backgroundImage: 'url(' + c.img + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat',
                    }
                    return <NavLink className={s.imgWrapper} key={c.id} to={c.routes} style={img}>
                        <div className={s.desc}>
                            <div className={s.workTitle}>Разработка сайтов</div>
                            <div className={s.workDesc}>Какая-то страница с сайта кейса.Безусловно очень важная</div>
                            <div> <Button name={'Подробнее'}/></div>
                        </div>
                        {/*</div>*/}

                    </NavLink>
                })
                }
            </div>

            <button className={s.btn}><span className={s.span}>ПРОДОЛЖИТЬ </span></button>
        </div>

    );
};

