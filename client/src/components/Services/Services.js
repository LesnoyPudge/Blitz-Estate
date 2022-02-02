import { useIsMobile } from '../../hooks/mobile.hook';
import { useTools } from '../../hooks/tools.hook';
import { ModalOpenButton } from './../';
import './index.scss';



export function Services(props) {
    const {setHeight} = useTools();
    const {isMobile} = useIsMobile();
    let target;

    function handlerEnter(e) {
        if (isMobile) return;

        const item = e.target.closest('li');
        target = item.querySelector('[data-item=description]');
        setHeight(target);
    }

    function handlerLeave() {
        if (isMobile) return;
        setHeight(target);
    }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__inner">
                    <h3 className="services__section-title section-title" data-aos="fade-up">
                        Наши услуги на международном рынке
                    </h3>
                    
                    <ul className="services__list">
                        <li className="services__item services-item grid-row-start-1 grid-row-end-3" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} data-aos="fade-up">
                            <picture className="services-item__image">
                                <source srcSet="./images/services-image-1.jpg" type="image/webp" />
                                <img src="./images/services-image-1.jpg" alt="Услуга" className="image" />
                            </picture>
                            
                            <div className="services-item__inner">
                                <div className="services-item__content">
                                    <h5 className="services-item__title">
                                        Жилая недвижимость
                                    </h5>
                                    
                                    <div className="services-item__description" data-item="description">
                                        <div className="services-item__text">
                                            <p>
                                                Сопровождение сделок по продаже, купли и аренде 
                                                объектов недвижимости под ключ.
                                            </p>
                                        </div>
                                        
                                        <ModalOpenButton>
                                            <button 
                                                className="services-item__button button button-animation"
                                                data-modal="moreInfo"
                                                data-modal-type="text"
                                                onClick={props.onClick}
                                                type="button"
                                            >
                                                Узнать больше
                                            </button>
                                        </ModalOpenButton>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="services__item services-item" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} data-aos="fade-up">
                        <picture className="services-item__image">
                            <source srcSet="./images/services-image-2.jpg" type="image/webp" />
                            <img src="./images/services-image-2.jpg" alt="Услуга" className="image" />
                        </picture>
                        <div className="services-item__inner">
                            <div className="services-item__content">
                            <h5 className="services-item__title">
                                Доходная недвижимость
                            </h5>
                            <div className="services-item__description" data-item="description">
                                <div className="services-item__text">
                                <p>
                                    Сопровождение сделок по продаже, купли и аренде 
                                    объектов недвижимости под ключ.
                                </p>
                                </div>
                                <ModalOpenButton>
                                    <button 
                                        className="services-item__button button button-animation"
                                        data-modal="moreInfo"
                                        data-modal-type="text"
                                        onClick={props.onClick}
                                        type="button"
                                    >
                                        Узнать больше
                                    </button>
                                </ModalOpenButton>
                            </div>
                            </div>
                        </div>
                        </li>
                        
                        <li className="services__item services-item" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} data-aos="fade-up">
                        <picture className="services-item__image">
                            <source srcSet="./images/services-image-3.jpg" type="image/webp" />
                            <img src="./images/services-image-3.jpg" alt="Услуга" className="image" />
                        </picture>
                        <div className="services-item__inner">
                            <div className="services-item__content">
                            <h5 className="services-item__title">
                                Инвестиционные операции
                            </h5>
                            <div className="services-item__description" data-item="description">
                                <div className="services-item__text">
                                <p>
                                    Сопровождение сделок по продаже, купли и аренде 
                                    объектов недвижимости под ключ.
                                </p>
                                </div>
                                <ModalOpenButton>
                                    <button 
                                        className="services-item__button button button-animation"
                                        data-modal="moreInfo"
                                        data-modal-type="text"
                                        onClick={props.onClick}
                                        type="button"
                                    >
                                        Узнать больше
                                    </button>
                                </ModalOpenButton>
                            </div>
                            </div>
                        </div>
                        </li>
                        
                        <li className="services__item services-item grid-col-start-2 grid-col-end-4" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} data-aos="fade-up">
                        <picture className="services-item__image">
                            <source srcSet="./images/services-image-4.jpg" type="image/webp" />
                            <img src="./images/services-image-4.jpg" alt="Услуга" className="image" />
                        </picture>
                        <div className="services-item__inner">
                            <div className="services-item__content">
                            <h5 className="services-item__title">
                                Покупка яхт
                            </h5>
                            <div className="services-item__description" data-item="description">
                                <div className="services-item__text">
                                <p>
                                    Сопровождение сделок по продаже, купли и аренде 
                                    объектов недвижимости под ключ.
                                </p>
                                </div>
                                <ModalOpenButton>
                                    <button 
                                        className="services-item__button button button-animation"
                                        data-modal="moreInfo"
                                        data-modal-type="text"
                                        onClick={props.onClick}
                                        type="button"
                                    >
                                        Узнать больше
                                    </button>
                                </ModalOpenButton>
                            </div>
                            </div>
                        </div>
                        </li>
                        
                        <li className="services__item services-item grid-col-start-1 grid-col-end-3" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} data-aos="fade-up">
                        <picture className="services-item__image">
                            <source srcSet="./images/services-image-5.jpg" type="image/webp" />
                            <img src="./images/services-image-5.jpg" alt="Услуга" className="image" />
                        </picture>
                        <div className="services-item__inner">
                            <div className="services-item__content">
                            <h5 className="services-item__title">
                                Доверительное управление
                            </h5>
                            <div className="services-item__description" data-item="description">
                                <div className="services-item__text">
                                <p>
                                    Сопровождение сделок по продаже, купли и аренде 
                                    объектов недвижимости под ключ.
                                </p>
                                </div>
                                <ModalOpenButton>
                                    <button 
                                        className="services-item__button button button-animation"
                                        data-modal="moreInfo"
                                        data-modal-type="text"
                                        onClick={props.onClick}
                                        type="button"
                                    >
                                        Узнать больше
                                    </button>
                                </ModalOpenButton>
                            </div>
                            </div>
                        </div>
                        </li>
                        
                        <li className="services__item services-item" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} data-aos="fade-up">
                        <picture className="services-item__image">
                            <source srcSet="./images/services-image-6.jpg" type="image/webp" />
                            <img src="./images/services-image-6.jpg" alt="Услуга" className="image" />
                        </picture>
                        <div className="services-item__inner">
                            <div className="services-item__content">
                            <h5 className="services-item__title">
                                Консьерж сервис
                            </h5>
                            <div className="services-item__description" data-item="description">
                                <div className="services-item__text">
                                <p>
                                    Сопровождение сделок по продаже, купли и аренде 
                                    объектов недвижимости под ключ.
                                </p>
                                </div>
                                <ModalOpenButton>
                                    <button 
                                        className="services-item__button button button-animation"
                                        data-modal="moreInfo"
                                        data-modal-type="text"
                                        onClick={props.onClick}
                                        type="button"
                                    >
                                        Узнать больше
                                    </button>
                                </ModalOpenButton>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
}


