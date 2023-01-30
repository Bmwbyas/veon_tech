import React from 'react';
import s from "./Form.module.scss";

type FormComponentPropsType={
    closemodal:()=>void
}
export const FormComponent:React.FC<FormComponentPropsType>= ({closemodal}) => {
    return (
        <form className={s.form}>
            <div className={s.closeModal} onClick={closemodal}>x</div>
            <div className={s.name}>Заявка на обратный звонок</div>

            <input className={s.input} name="Name" id="name" placeholder="Ваше имя"/>
            <input className={s.input} name="Phone" id="email" placeholder="Номер телефона"/>

            <p className={s.textareaWrapper} >Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных
                в соответствии с целями указанными в Политике обработки персональных данных</p>

            <button className={s.button} type={"submit"} name={'send message'}>ОТПРАВИТЬ</button>

        </form>
    );
};

