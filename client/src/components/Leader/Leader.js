import "./index.scss";
import {ModalOpenButton} from '..';



export function Leader(props) {
    return (
        <section className="leader" id="leader">
            <div className="container">
                <div className="leader__inner">
                    <div className="leader__content" data-aos="fade-up">
                        <h3 className="leader__section-title section-title">
                            Руководитель агентства <br />
                            Blitz Estate
                        </h3>
                        
                        <h5 className="leader__name">Георгий Мебония</h5>
                        
                        <div className="leader__text">
                            <p>
                                Вице-президент по проектам в ММДЦ «Москва-Сити», Генеральный
                                директор компании Blitz Estate в России.
                            </p>
                            <p>
                                Имея европейский опыт работы и показывая верность своему делу
                                являемся стратегическим партнером ММДЦ «Москва-Сити с 2013 года
                                на эксклюзивной реализации объектов приватных к продаже.
                            </p>
                            <p>
                                Благодаря кропотливому и теплому отношению нам удается быстро и
                                эффективно оказывать нашим клиентам услуги высочайшего уровня в
                                сфере недвижимости.
                            </p>
                        </div>
                        
                        <ModalOpenButton>
                            <button
                                className="leader__button button button-animation"
                                data-modal="askQuestion"
                                data-modal-type="form"
                                type="button"
                            >
                                Задать вопрос
                            </button>
                        </ModalOpenButton>
                        
                    </div>
                    
                    <picture className="leader__image">
                        <source srcSet="./images/leader__image.png" type="image/webp" />
                        
                        <img
                        src="./images/leader__image.png"
                        alt="Георгий Мебония"
                        className="image"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
