import { Galery } from './Galery';
import { ModalOpenButton } from '..';
import './index.scss';



export function AboutUs(props) {
    return (
        <section className="about-us" id="about-us">
            <div className="container">
                <div className="about-us__inner" data-aos="fade-up">
                    <div className="about-us__content">
                        <h3 className="about-us__section-title section-title">
                            Blitz Estate - на рынке недвижимости с 2008 года
                        </h3>
                        
                        <div className="about-us__text">
                            <p>
                                Blitz Estate – международная компания по управлению 
                                недвижимостью и финансами. Основана в 2008 г. в 
                                Австрии. На сегодня представлена в Англии, Испании, 
                                Латвии, ОАЭ, Австрии и России, кроме того имеет 
                                партнерскую сеть более чем в десяти странах мира.
                            </p>
                            
                            <p>
                                Мы предоставляем услуги полного цикла по 
                                приобретению и продаже недвижимости и 
                                управлению активами, предоставляя клиентам 
                                неизменно высокое качество сервиса. Наш подход 
                                позволяет оптимизировать инвестиционный портфель, 
                                диверсифицировать риски и обеспечить полную 
                                конфиденциальность сделки.
                            </p>
                        </div>
                        
                        <ModalOpenButton>
                            <button 
                                className="about-us__button button button-animation" 
                                type="button" 
                                data-modal="moreInfo"
                                data-modal-type="text"
                            >
                                Узнать больше
                            </button>
                        </ModalOpenButton>
                    </div>
                   
                    {<Galery className={'about-us__galery'}/>}
                </div>
            </div>
        </section>
    );
}


