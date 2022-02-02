import { DirectionItem } from './DirectionItem';
import './index.scss';

export function Directions(props) {
    const directions = [
        {
            label: 'Аренда жилой недвижимости',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-1.svg'
        },
        {
            label: 'Аренда коммерческой недвижимости',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-2.svg'
        },
        {
            label: 'Отдел блиц-сделок',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-3.svg'
        },
        {
            label: 'Продажа новостроек',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-4.svg'
        },
        {
            label: 'Продажа жилой недвижимости на вторичном рынке',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-5.svg'
        },
        {
            label: 'Продажа коммерческой недвижимости',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-6.svg'
        },
        {
            label: 'Инвестиционные проекты',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-7.svg'
        },
        {
            label: 'Недвижимость за рубежом',
            leader: 'Александр Смирнов',
            phone: '+7(495)199-19-99',
            email: 'moscow@blitz.estate',
            image: 'directions__item-image-8.svg'
        },
    ];

    return (
        <section className="directions" id="directions">
            <div className="container">
                <div className="directions__inner">
                    <h3 className="directions__section-title section-title" data-aos="fade-up">
                        Направления нашего агентства
                    </h3>
                    
                    <div className="directions__content">
                        <ul className="directions__list">
                            {
                                directions.map((direction, index) => {
                                    return (
                                        <DirectionItem
                                            key={index}
                                            direction={direction}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}


