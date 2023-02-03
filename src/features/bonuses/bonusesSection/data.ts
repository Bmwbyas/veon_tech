import img1 from "../../../assets/img/imgBonuses/img1.png";
import img2 from "../../../assets/img/imgBonuses/img2.png";
import img3 from "../../../assets/img/imgBonuses/img3.png";
import img4 from "../../../assets/img/imgBonuses/img4.png";

const img1Feat = {
    backgroundImage: 'url(' + img1 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
}
const img2Feat = {
    backgroundImage: 'url(' + img2 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
}
const img3Feat = {
    backgroundImage: 'url(' + img3 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
}
const img4Feat = {
    backgroundImage: 'url(' + img4 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
}

export type ImgType={
    backgroundImage: string
    backgroundSize: string
    backgroundPosition: string
    backgroundRepeat:string
}

export type BonusesDataType={
    id:number
    icon:ImgType
    header:string
    secondHeader: string
    text:string
    desc:string|null
}
export const bonusesData:BonusesDataType[]=[
    {id:1,icon:img1Feat, header:'Скидка 100 BYN',secondHeader:'за скорость', text:'При подписании договора в течение 3 дней после получения коммерческого предложения', desc:'*При заказе от 1500 BYN'},
    {id:2,icon:img2Feat, header:'Бесплатный',secondHeader:'логотип', text:'*2 варианта логотипа при создании сайта с уникальным дизайном', desc:null},
    {id:3,icon:img3Feat, header:'Hostfly.by',secondHeader:'14 дней бесплатно', text:'*На любой тариф хостинга', desc:null},
    {id:4,icon:img4Feat, header:'5% скидка',secondHeader:'на все услуги', text:'*При единовременном платеже всей суммы услуги. Для новых клиентов. Исключение оплата лицензий.', desc:null},

]
