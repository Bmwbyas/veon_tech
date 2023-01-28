import case1 from "../../../assets/img/imgMain/cases/a1.png";
import case2 from "../../../assets/img/imgMain/cases/a2.png";
import case3 from "../../../assets/img/imgMain/cases/a3.png";
import case4 from "../../../assets/img/imgMain/cases/a4.png";
import case5 from "../../../assets/img/imgMain/cases/a5.png";
import {ExampleType} from "../../cases/currentCase/data";


export type CasesDataType={
    title:string
    desc:string

    img:ExampleType&{backgroundRepeat: string}|string;
}

export const casesData:CasesDataType[]=[
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
    img:{
        backgroundImage: 'url(' + case1 + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    },
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
    img:{
        backgroundImage: 'url(' + case2 + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    },
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
        img:{
            backgroundImage: 'url(' + case3 + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }
    },

    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
        img:{
            backgroundImage: 'url(' + case5 + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }
    },
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
        // img:{
        //     backgroundImage: 'url(' + case4 + ')',
        //     backgroundSize: 'contain',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // },
        img:case4
    },
]
export const imgddfdgsgd ={
    backgroundImage: 'url(' + case4 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}