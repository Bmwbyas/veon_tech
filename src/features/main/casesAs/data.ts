import case1 from "../../../assets/img/imgMain/cases/a1.png";
import case2 from "../../../assets/img/imgMain/cases/a2.png";
import case3 from "../../../assets/img/imgMain/cases/a3.png";
import case4 from "../../../assets/img/imgMain/cases/a4.png";
import case5 from "../../../assets/img/imgMain/cases/a5.png";


export type CasesDataType={
    title:string
    desc:string
img:string
    // img:ExampleType&{backgroundRepeat: string}|string
}
export const imgddfdgsgd ={
    backgroundImage: 'url(' + case4 + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}


export const casesData:CasesDataType[]=[
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
    img:case1
    //     {
    //     backgroundImage: 'url(' + case1 + ')',
    //     backgroundSize: 'contain',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat'
    // }
    },
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
    img:case2
    //     {
    //     backgroundImage: 'url(' + case2 + ')',
    //     backgroundSize: 'contain',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat'
    // }
    },
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
         img:case3
             // {
        //     backgroundImage: 'url(' + case3 + ')',
        //     backgroundSize: 'contain',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // }
    },

    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
        img:case5
        //     {
        //     backgroundImage: 'url(' + case5 + ')',
        //     backgroundSize: 'contain',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // }
    },
    {
        title:'Creative business card',

        desc:'UX, UI, Graphic Design',
        img:case4
        //     {
        //     backgroundImage: 'url(' + case4 + ')',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // },
        // img:imgddfdgsgd
    },
]
