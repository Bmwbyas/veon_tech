import React, {LegacyRef, MouseEventHandler, useState} from 'react';
import s from './Header.module.scss'
import {Nav} from "./nav/Nav";
import logo from './../../assets/img/logo.png'

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const imgLogo = {
        backgroundImage: 'url(' + logo + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    }
    const root: LegacyRef<HTMLDivElement> | undefined | null = React.useRef(null);

    React.useEffect(() => {
        const onClick = (e: any) => {
            if (root.current) root.current.contains(e.target) || setShowMenu(false)

        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const firstLine = `${s.burgerLine} ${s.burgerLineFirst} ${showMenu && `${s.burgerLineFirstActive}`}`
    const secondLine = `${s.burgerLine} ${s.burgerLineSecond} ${showMenu && `${s.burgerLineSecondActive}`}`
    const thirdLine = `${s.burgerLine} ${s.burgerLineThird} ${showMenu && `${s.burgerLineThirdActive}`}`
    const forthLine = `${s.burgerLine} ${s.burgerLineFourth} ${showMenu && `${s.burgerLineFourthActive}`}`
    const backgroundActive = `${s.background} ${showMenu && `${s.background} ${s.backgroundActive}`}`
    const showMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>|React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
        if (!e.target) {
            setShowMenu(!showMenu)
        }
        setShowMenu(!showMenu)
    }
const showNav=showMenu?s.navContainer:s.navContainer+ ' ' +s.navActive
    return (<>
            <div className={s.header}>
                <div className={s.wrapper}>
                    <div className={s.headerContainer}>
                        <div className={s.imgContainer} style={imgLogo}></div>
                        <Nav/>
                    </div>

                </div>

                <div className={s.burgerContainer}>
                    <div className={s.burger}  onClick={showMenuHandler}>
                        <span className={firstLine}></span>
                        <span className={secondLine}></span>
                        <span className={thirdLine}></span>
                        <span className={forthLine}></span>
                        <span className={backgroundActive}></span>
                    </div>
                    <div className={showNav}>
                        <Nav showMenuHandler={showMenuHandler}/>
                    </div>
                </div>
            </div>
        </>
    );
};

