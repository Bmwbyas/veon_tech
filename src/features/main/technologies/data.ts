import angular from "../../../assets/img/imgMain/technologies/frontEnd/angular.svg";
import npm from "../../../assets/img/imgMain/technologies/frontEnd/npm.svg";
import bootstrap from "../../../assets/img/imgMain/technologies/frontEnd/bootstrap.svg";
import react from "../../../assets/img/imgMain/technologies/frontEnd/react.svg";
import html from "../../../assets/img/imgMain/technologies/frontEnd/html-5.svg";
import nodejs from "../../../assets/img/imgMain/technologies/frontEnd/nodejs.svg";
import typescript from "../../../assets/img/imgMain/technologies/frontEnd/typescript.svg";
import vuejs from "../../../assets/img/imgMain/technologies/frontEnd/vuejs.svg";

export type ImgFrontEnd = {
    backgroundImage: string
    backgroundSize: string
    backgroundPosition: string
    backgroundRepeat: string
}
export type DType={ title: string, img: ImgFrontEnd }
export type TechDataType = {[key:string]:DType[]}
const angularImg = {
    backgroundImage: 'url(' + angular + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const npmImg = {
    backgroundImage: 'url(' + npm + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const bootstrapImg = {
    backgroundImage: 'url(' + bootstrap + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const reactImg = {
    backgroundImage: 'url(' + react + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const htmlImg = {
    backgroundImage: 'url(' + html + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const nodejsImg = {
    backgroundImage: 'url(' + nodejs + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const typescriptImg = {
    backgroundImage: 'url(' + typescript + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const vuejsImg = {
    backgroundImage: 'url(' + vuejs + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}


export const techData: TechDataType = {['frontend']:[
    {title: 'Angular.JS', img: angularImg},
    {title: 'React.JS', img: reactImg},
    {title: 'Npm', img: npmImg},
    {title: 'Typescript', img: typescriptImg},
    {title: 'HTML 5', img: htmlImg},
    {title: 'VUE.js', img: vuejsImg},
    {title: 'Bootstrap', img: bootstrapImg},
    {title: 'Node.JS', img: nodejsImg},
]}