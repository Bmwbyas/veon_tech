import React from 'react';
import s from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <form className={s.form}>
                    <div className={s.name}>ОСТАЛИСЬ ВОПРОСЫ? - ПИШИТЕ</div>
                    <div className={s.containerInput}>
                        <input className={s.input} name="Name" id="name" placeholder="Имя"/>
                        <input className={s.input} name="Email" id="email" placeholder="E-mail"/>
                        <input className={s.input} name="Phone" id="phone" placeholder="Телефон"/>
                    </div>
                    <div className={s.textareaWrapper}><textarea className={s.textarea} name="Message" id="message"
                                                                 placeholder="Комментарий"></textarea></div>
                    <div className={s.buttonWrapper}>
                        <button className={s.button} type={"submit"} name={'send message'}>ОТПРАВИТЬ</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;