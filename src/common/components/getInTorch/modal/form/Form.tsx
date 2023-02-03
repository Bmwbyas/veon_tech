import React from 'react';
import s from "./Form.module.scss";
import imgLogo from "../../../../../assets/img/logoModal.jpg";
import {NavLink} from "react-router-dom";
import {routes} from "../../../../../features/routes/routes";

type FormComponentPropsType = {
    closemodal: () => void
}
export const FormComponent: React.FC<FormComponentPropsType> = ({closemodal}) => {

    const logo = {
            backgroundImage: 'url(' + imgLogo + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
           backgroundRepeat:'no-repeat'
        }

        return(
        <form className={s.form}>
            <div className={s.logo} style={logo}> </div>
            <div className={s.closeModal} onClick={closemodal}>x</div>
            <div className={s.name}>Заявка на обратный звонок</div>

            <input className={s.input} name="Name" id="name" placeholder="Ваше имя"/>
            <input className={s.input} name="Phone" id="email" placeholder="Номер телефона"/>

            <p className={s.textareaWrapper}>Нажимая на кнопку «Отправить», вы даете свое согласие на обработку
                персональных данных
                в соответствии с целями указанными в <NavLink to={routes.privacyPolicy} onClick={closemodal}>Политике обработки персональных данных</NavLink></p>

            <button className={s.button} type={"submit"} name={'send message'}>ОТПРАВИТЬ</button>

        </form>
    );
};

