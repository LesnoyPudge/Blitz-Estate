import { useState, useEffect, useRef, useContext } from 'react';
import { ModalContext } from '../../contexts';
import { useIsMobile } from '../../hooks/mobile.hook';
import { useScroll } from '../../hooks/scroll.hook';
import { useTools } from '../../hooks/tools.hook';
import { ModalOpenButton } from '../Modal/ModalOpenButton';
import './index.scss';

export function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const navbar = useRef(null);
    const {toggleWindowLock} = useTools(false);
    const isMobile = useIsMobile();
    const {scrollToElement} = useScroll();
    const { modalOpened } = useContext(ModalContext);

    

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > navbar.current.clientHeight) {
                if (!isFixed) {
                    setIsFixed(true);
                } 
            } else {
                if (isFixed) {
                    setIsFixed(false);
                } 
            }
        }

        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [isFixed]);

    useEffect(() => {
        if(!isMobile && isOpen) {
            handleBurgerClick();
        }
    });

    function handleBurgerClick() {
        setIsOpen(!isOpen);
        toggleWindowLock(isOpen);
    }

    function handleClick(e) {
        e.preventDefault();
        setIsOpen(false);
        toggleWindowLock(true);
        scrollToElement(e.target.dataset.scroll)
    }


    return (
        <div 
            className={
                ((props.className) ? props.className : '') + 
                ' navbar ' + 
                ((isOpen && isMobile) ? ' navbar--active ' : '') +
                ((isOpen && isMobile && isFixed) ? ' scroll-padding ' : '') + 
                ((isFixed) ? ' navbar--fixed ' : '') +
                ((!isMobile && isFixed && modalOpened) ? ' scroll-padding ' : '')
            }

            ref={navbar}
        >
            <div className="navbar__inner">
                <img 
                    className="navbar__logo logo" 
                    src="/images/logo--dark.svg" 
                    alt="Blitz Estate" 
                    data-scroll="#header" 
                    onClick={handleClick}
                />          
                
                <nav className={"navbar__menu menu " + ((isOpen) ? 'scroll-padding' : '')}>
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a 
                                className="menu__link" 
                                href="#test" 
                                data-scroll="#test" 
                                onClick={handleClick}
                            >
                                ????????
                            </a>
                        </li>

                        <li className="menu__item">
                            <a 
                                className="menu__link" 
                                href="#services" 
                                data-scroll="#services" 
                                onClick={handleClick}
                            >
                                ????????????
                            </a>
                        </li>

                        <li className="menu__item">
                            <a 
                                className="menu__link" 
                                href="#apartments" 
                                data-scroll="#apartments" 
                                onClick={handleClick}
                            >
                                ????????????????
                            </a>
                        </li>

                        <li className="menu__item">
                            <a 
                                className="menu__link" 
                                href="#about-us" 
                                data-scroll="#about-us"
                                onClick={handleClick}
                            >
                                ?? ??????
                            </a>
                        </li>

                        <li className="menu__item">
                            <a 
                                className="menu__link" 
                                href="#directions" 
                                data-scroll="#directions"
                                onClick={handleClick}
                            >
                                ??????????????????????
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <div className="navbar__phone phone">
                    <a className="navbar__phone-number phone__number" href="tel:+74951991999">
                        +7 (495) 199-19-99         
                    </a>
                    
                    <ModalOpenButton>
                        <button 
                            onClick={props.onClick} 
                            data-modal="orderCall" 
                            data-modal-type="form"
                            className="navbar__phone-button phone__button button button-animation" 
                            type="button"
                        >
                            ???????????????? ????????????
                        </button>
                    </ModalOpenButton>
                </div>
                
                <button className="navbar__burger burger" type="button" onClick={handleBurgerClick}>
                    <span className="burger__item" />
                </button>
            </div>
        </div> 
    );
}


