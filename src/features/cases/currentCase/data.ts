import example1 from '../../../assets/img/imgCases/example1.png'
import example2 from '../../../assets/img/imgCases/example2.png'
import example3 from '../../../assets/img/imgCases/example3.png'

export type ExampleType={
    backgroundImage: string
    backgroundSize: string
    backgroundPosition: string
}
export type WorkDataType={
    title:string
    desc:string
    src:string
    img:ExampleType|{background:string}
}

const example1Img = {
    backgroundImage: 'url(' + example1 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}
const example2Img = {
    backgroundImage: 'url(' + example2 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}
const example3Img = {
    backgroundImage: 'url(' + example3 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}
const lastItem = {
    background: '#ef7f11'
}

export const workData:WorkDataType[]=[
    {
        title:'Разработка сайтов',
        desc:'Какая-то страница с сайта кейса.Безусловно очень важная',
         img:example1Img,
        src:example1
    },
    {
        title:'Разработка сайтов',
        desc:'Какая-то страница с сайта кейса.Безусловно очень важная',
        img:example2Img,
        src:example2
    },
    {
        title:'Разработка сайтов',
        desc:'Какая-то страница с сайта кейса.Безусловно очень важная',
        img: example3Img,
        src:example3
    }]

export const taskWebData =[
    {name:'Наименование компании',value:`ООО "Рент клаб" (под НДА)`},
    {name:'Сфера деятельности',value:`Аренда вещей`},
    {name:'Страна, на которую рассчитан сайт',value:`Российская Федерация`},
    {name:'Основные товары и услуги',value:`Аренда вещей`},
    {name:'Домен сайта',value:`ООО "https://rentclub.pro`},
    {name:'Целевая аудитория',value:`Мужчины/женщины от 18 до 40 лет`},
    {name:'Задачи сайта',value:`Реализация Back-end части (кабинет сделки, поведение пользователей)`},
    {name:'Тип сайта',value:`ООО "Маркетплейс`},
    {name:'Тариф',value:`-`},
    {name:'CMS',value:`-`},
    {name:'Языки разработки/Фреймовик',value:`PHP, Laravel`},
    {name:'Пожелания заказчика',value:`Реализация кабинет сделки, а также различные сценарии поведения арендодателя и арендатора в кабинете сделки`},
]

export const caseSimilar=[{img:example1Img,id:1},{id:2,img:example2Img},{id:3,img:example3Img},{id:4,img:lastItem}]


