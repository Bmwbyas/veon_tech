import React from 'react';
import s from './Footer.module.scss'
import {socialIcon} from "./data";
import smallLogo from "../../assets/img/imgFooter/logoFooter.png";
import logo from '../../assets/img/imgFooter/biglogo.png'
export const Footer = () => {
  const logoFooter=  {
        backgroundImage: 'url(' + smallLogo + ')',
            backgroundSize: 'contain',
        backgroundPosition: 'center'
    }

    return (
        <div className={s.footerContainer}>
            <div className={s.footerWrap}>
                <div className={s.socialContainer}>
                    <div className={s.rectangle} ><img src={logo} alt ={'veon-tech'}/></div>
                    <div className={s.socialIconContainer}>
                        <div className={s.socialWrap}>
                        {socialIcon.map((st,index)=><div key={index} className={s.iconContainer}><div className={s.icon} style={st}></div></div>)}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={s.contactsContainer}>
                    <div className={s.nameCompanyContainer}>
                        <div className={s.name}>ООО "Веон-консалт"</div>
                        <div>УНП 193082231</div>
                    </div>
                    <div>+7(995)577-51-63<br/>
                        sales@veon-tech.ru<br/>
                        220068, г. Минск, ул. Орловская, 40а,<br/> офис 40-1<br/>
                        С понедельника по пятницу</div>
                    <div>Copyright © 2022 Veon-Tech Ltd.<br/>
                        All Rights Reserved.</div>

                </div>
            </div>
        </div>
    );
};

