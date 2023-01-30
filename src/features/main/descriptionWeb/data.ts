import imgA1 from "../../../assets/img/imgMain/descWeb/1a.png";
import imgA2 from "../../../assets/img/imgMain/descWeb/2a.png";
import imgA3 from "../../../assets/img/imgMain/descWeb/3a.png";
import imgA4 from "../../../assets/img/imgMain/descWeb/4a.png";
import imgA5 from "../../../assets/img/imgMain/descWeb/5a.png";
import {ExampleType} from "../../cases/currentCase/data";

export type DevDataType={
    header:string
    desc:string
    img:ExampleType
}

export const devData:DevDataType[] = [
    {
        header: 'Разработка сайтов',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: {
            backgroundImage: 'url(' + imgA1 + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }
    },
    {
        header: 'Поддержка сайтов',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: {
            backgroundImage: 'url(' + imgA2 + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }
    },
    {
        header: 'Разработка ПО',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: {
            backgroundImage: 'url(' + imgA3 + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }
    },
    {
        header: 'UX/UI дизайн',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: {
            backgroundImage: 'url(' + imgA4 + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }}
    // },{
    //     header: 'Маркетинг',
    //     desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
    //     img: {
    //         backgroundImage: 'url(' + imgA5 + ')',
    //         backgroundSize: 'contain',
    //         backgroundPosition: 'center'
    //     }
    // },
]