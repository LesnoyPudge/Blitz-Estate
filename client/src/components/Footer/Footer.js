import './index.scss';
import {ModalOpenButton} from '..';



export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <img className="footer__logo logo" src="images/logo--light.svg" alt="Blitz Estate" />
                        </li>
                        
                        <li className="footer__item">
                            <div className="footer__info">
                                <div className="footer__schedule">
                                    <p className="footer__schedule-label">
                                        Время работы:
                                    </p>
                                    
                                    <p className="footer__schedule-time">
                                        Пн-Пт: 8:00-23:00, Сб-Вс: 9:00-21:00
                                    </p>
                                </div>
                                
                                <address className="footer__address">
                                    Пресненская набережная, дом 12 Башня "Федерация"  Восток, 31 этаж, Офис Р
                                </address>
                                
                                <span className="footer__ogrn">
                                    ОГРН: 1187746683464
                                </span>
                                <span className="footer__inn">
                                    ИНН: 7703462548
                                </span>
                            </div>
                        </li>
                        
                        <li className="footer__item">
                            <div className="footer__phone phone">
                                <a className="footer__phone-number phone__number" href="tel:+74951991999">
                                    +7 (495) 199-19-99
                                </a>

                                <ModalOpenButton>
                                    <button 
                                        className="footer__phone-button phone__button button button-animation" 
                                        data-modal="orderCall" 
                                        data-modal-type="form"
                                        type="button"
                                    >
                                        Заказать звонок
                                    </button>
                                </ModalOpenButton>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
}