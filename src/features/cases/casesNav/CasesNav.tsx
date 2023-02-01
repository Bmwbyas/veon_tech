import React, {memo} from 'react';
import s from './CasesNav.module.scss'
import {CasesDataType} from "../casesContent/data";

type CasesNavType={
    filter:CasesDataType
onChangeFilter:( filter:CasesDataType)=>void
}
type DataType= {
    id:number
    name:string
    type:CasesDataType
}

export const data:DataType[]=[
    {id:1,name:'ВСЕ',type:'all'},
    {id:2,name:'ИНТЕРНЕТ-МАГАЗИНЫ',type:'market'},
    {id:3,name:'ИНТЕРНЕТ-КАТАЛОГИ',type:'catalog'},
    {id:4,name:'КОРПОРАТИВНЫЕ САЙТЫ',type:'corporat'},
    {id:5,name:'САЙТ-ВИЗИТКИ',type:'visit'},

]

export const CasesNav:React.FC<CasesNavType> =memo( ({onChangeFilter,filter}) => {

    return (
        <div className={s.container}>
            {data.map((item)=>{
                const showModal=item.type!==filter?s.nav:`${s.nav} ${s.active}`
                const changeFilter=()=>{
                    onChangeFilter(item.type)
                }
                return<div id={item.type} key={item.id} className={s.dash}>
                    <div  className={showModal} onClick={changeFilter}>{item.name}</div>

                </div>})}

        </div>
    );
});

