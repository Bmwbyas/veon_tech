import {routes} from "../../../features/routes/routes";

export type DataType={
    title:string
    route:string
}
export const aboutUsData:DataType[]=[
    {title:'О НАШЕЙ КОМПАНИИ',route:routes.aboutUs},
    {title:'NDA',route:routes.aboutUs},
    {title:'ВАКАНСИИ',route:routes.aboutUs},
]
export const servicesData:DataType[]=[
    {title:'Разработка сайтов',route:routes.services},
    {title:'Поддержка сайтов',route:routes.services},
    {title:'Разработка ПО',route:routes.services},
    {title:'UX/UI дизайн',route:routes.services},
]
export const casesData:DataType[]=[
    {title:'ВСЕ',route:routes.cases},
    {title:'Поддержка сайтов',route:routes.caseRentClub},
]
