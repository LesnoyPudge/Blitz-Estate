import { useScroll } from '../../hooks/scroll.hook';
import { Navbar } from '../Navbar/Navbar';
import './index.scss';



export function Header(props) {
    const {scrollToElement} = useScroll();

    function handleClick(e) {
        e.preventDefault();
        scrollToElement(e.target.dataset.scroll)
    }

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__inner">
                    <Navbar className="header__navbar"/>

                    <div className="header__content">
                        <h1 className="header__title">
                            Агентство <br />
                            с международным <br /> 
                            именем Blitz Estate
                        </h1>
                    
                        <h4 className="header__section-subtitle section-subtitle">
                            Поможем продать, купить и арендовать <br />недвижимость в Москве, районе Сити и области
                        </h4>
                    
                        <div className="header__info">
                            <div className="header__info-item">
                                <div className="header__info-number">17</div>
                                
                                <p className="header__info-text">Работаем в <br />17 странах</p>
                            </div>
                            
                            <div className="header__info-item">
                                <div className="header__info-number">1963</div>
                                
                                <p className="header__info-text">Помогли 1963-м <br />клиентам</p>
                            </div>
                            
                            <div className="header__info-item">
                                <div className="header__info-number">10</div>
                                
                                <p className="header__info-text">Лет на рынке <br />недвижимости</p>
                            </div>
                        </div>
                        <div className="header__champagne-prize">
                            <img className="header__champagne-image" src="./images/champagne.png" alt="Приз - бутылка шампанского" />
                            
                            <p className="header__champagne-text">
                                Пройди тест и получи в подарок бутылку <br />
                                шампанского <b>Veuve Clicquot</b>
                            </p>
                        </div>
                        
                        <button 
                            className="header__button button button-animation" 
                            type="button" 
                            data-scroll="#test"
                            onClick={handleClick}
                        >
                            Подобрать недвижимость
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}