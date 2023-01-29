import phone from "../../assets/img/iconContacts/phone.png";
import email from "../../assets/img/iconContacts/email.png";
import address from "../../assets/img/iconContacts/address.png";


const phoneFeat = {
    backgroundImage: 'url(' + phone + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}
const emailFeat = {
    backgroundImage: 'url(' + email + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}
const addressFeat = {
    backgroundImage: 'url(' + address + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}
export const  contactData=[
    {icon:phoneFeat,header:'Телефон',desc:'Наши специалисты готовы принимать Ваши звонки в рабочее время офиса с 9:00 до 17:00 с понедельника по пятницу.', contct:'+375 (29) 390-56-65'},
    {icon:emailFeat,header:'Электронная почта',desc:'Заявки на электронную почту мы принимаем ежедневно в режиме 24/7. Будьте уверены, мы обязательно с вами свяжемся!', contct:'sales@veon-tech.ru'},
    {icon:addressFeat,header:'Местоположение офиса',desc:'Приглашаем Вас в наш офис. Также, есть возможность встреч с партнерами и заказчиками в удобном для Вас месте.', contct:'Минск, пр-т Независимости 169, 805Ю'},]

export const workhourData=[
    {day:'Понедельник',time:'9:00-17:00'},
    {day:'Вторник',time:'9:00-17:00'},
    {day:'Среда',time:'9:00-17:00'},
    {day:'Четверг',time:'9:00-17:00'},
    {day:'Пятница',time:'9:00-17:00'},
    {day:'Суббота',time:'выходной'},
    {day:'Воскресенье',time:'выходной'},
]