import './index.scss';
import { TestBox } from './TestBox';

export function Test(props) {
    return (
        <section className="test" id="test">
            <div className="container">
                <div className="test__inner">
                    <h3 className="test__section-title section-title" data-aos="fade-up">
                        Пройдите тест из 5 вопросов
                    </h3>
                    
                    <h4 className="test__section-subtitle section-subtitle" data-aos="fade-up">
                        Мы подберём 20 покупателей готовых купить вашу недвижимость в течение 24 часов
                    </h4>
                    <div className="test__content" data-aos="fade-up">
                        <TestBox/>
                        
                        <ul className="test__list">
                            <li className="test__list-item">
                                Поможем Вам приобрести, продать или 
                                арендовать необходимую недвижимость
                            </li>
                            
                            <li className="test__list-item">
                                Продадим вашу недвижимость за 21 день 
                                или выкупим сами по стоимости в договоре
                            </li>
                            
                            <li className="test__list-item">
                                Забронируем понравившуюся квартиру и зафиксируем 
                                стоимость для вас на момент бронирования
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


