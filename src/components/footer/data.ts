import insta from "../../assets/img/imgFooter/insta.png";
import facebook from "../../assets/img/imgFooter/facebook.png";
import linkedin from "../../assets/img/imgFooter/linkedin.png";
import watsapp from "../../assets/img/imgFooter/watsapp.png";
import teleg from "../../assets/img/imgFooter/teleg.png";

type SocialIconType={
    backgroundImage: string
    backgroundSize: string
    backgroundPosition: string
    margin: string
}
export const socialIcon:SocialIconType[]=[
    {
        backgroundImage: 'url(' + insta + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        margin: '0 auto'
    },
    {
        backgroundImage: 'url(' + facebook + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

        margin: '0 auto',
    },
    {
        backgroundImage: 'url(' + linkedin + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        margin: '0 auto'
    },
    {
        backgroundImage: 'url(' + watsapp + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        margin: '0 auto'
    },
    {
        backgroundImage: 'url(' + teleg + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        margin: '0 auto'
    }
]