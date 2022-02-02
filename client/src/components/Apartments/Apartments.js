import { useCallback, useEffect, useState } from 'react';
import { ApartmentsList } from '.';
import { useHttp } from '../../hooks/http.hook';
import { useIsMobile } from '../../hooks/mobile.hook';
import { ApartmentsFilterButton } from '.';
// import { AddApartmentForm, DeleteApartmentForm, UpdateApartmentForm } from '.';
import './index.scss';



export function Apartments(props) {
    const {isLoading, request} = useHttp();
    const [apartments, setApartments] = useState(null);
    const [filteredApartments, setFilteredApartments] = useState(null);
    const [showedApartments, setShowedApartments] = useState(null);
    const {isMobile} = useIsMobile;
    const [showLimit, setShowLimit] = useState({
        toShow: ((props.showLimit) ? props.showLimit : (isMobile) ? 2 : 4),
        step: ((props.step) ? props.step : (isMobile) ? 2 : 4)
    });
    const [activeItem, setActiveItem] = useState(0);
    const filterButtons = [
        {
            min: 0,
            max: Infinity,
            text: 'Показать все'
        },
        {
            min: 20000000,
            max: 30000000,
            text: 'От 20 до 30 млн'
        },
        {
            min: 30000000,
            max: 50000000,
            text: 'От 30 до 50 млн'
        },
        {
            min: 50000000,
            max: 100000000,
            text: 'От 50 до 100 млн'
        },
        {
            min: 100000000,
            max: Infinity,
            text: 'Более 100 млн'
        },
    ];

    

    const fetchApartments = useCallback(async () => {
        try {
            const response = await request('./api/apartments/', 'GET', null, {});

            setApartments(response);
        } catch (error) {
            console.log(error);
        }
    }, [request]);

    const show = useCallback(() => {
        const array = (
            (filteredApartments) ? 
                filteredApartments 
            : 
            (apartments) ? 
                apartments 
            :
            null
        );
        
        if (!array) return fetchApartments;

        setShowedApartments(array.filter((element, index) => {
            return (index < showLimit.toShow);
        }));
    }, [showLimit, apartments, filteredApartments, fetchApartments]);

    function filter(e) {
        setFilteredApartments(
            apartments
                .filter(apartment => (
                    (apartment.price > e.target.dataset.min) && (apartment.price < e.target.dataset.max)
                )
            )
        );
    }

    function resetShowLimit() {
        setShowLimit(showLimit => ({
            ...showLimit,
            toShow: ((props.step) ? props.step : (isMobile) ? 2 : 4),
        }))
    }

    useEffect(() => {
        fetchApartments();
    }, [fetchApartments]);

    useEffect(() => {
        show();
    }, [show]);
    
    return (
        <section className="apartments" id="apartments">
            <div className="container">
                {/* { 
                    <>
                        <AddApartmentForm/>
                        <DeleteApartmentForm/>
                        <UpdateApartmentForm/>
                    </>
                } */}

                <div className="apartments__inner">
                    <h3 className="apartments__section-title section-title" data-aos="fade-up">
                        Выберите апартаменты в Москва-Сити
                    </h3>
                    
                    <h4 className="apartments__section-subtitle section-subtitle" data-aos="fade-up">
                        Мы включили в наш каталог все апартаменты доступные для покупки в Москва-Сити
                    </h4>
                    
                    <div className="apartments__content">
                        <form className="apartments__apartments-form apartments-form">
                            <div className="apartments-form__form-filter">
                                {
                                    filterButtons.map((button, index) => {
                                        return (
                                            <ApartmentsFilterButton
                                                key={index}
                                                min={button.min}
                                                max={button.max}
                                                isActive={activeItem === index}
                                                onClick={(e) => {
                                                    filter(e);
                                                    resetShowLimit();
                                                    setActiveItem(index);
                                                }}
                                                text={button.text}
                                            />
                                        );
                                    })
                                }
                            </div>
                            
                            <div className="apartments-form__apartments-form-output apartments-form-output">                                
                                {
                                    (isLoading) ? 
                                        null
                                    :
                                    (showedApartments)?
                                        (showedApartments.length) ? 
                                            <ApartmentsList apartments={showedApartments}/> 
                                        : 
                                        <div className="apartments-form__not-found not-found">
                                            <p className="not-found__text">
                                                Апартаменты, соответствующие вашему запросу, не найдены.
                                            </p>
                                        </div>
                                    :
                                    null
                                }

                                {
                                    (isLoading) ? 
                                        <button 
                                            className="apartments-form__form-output-button button" 
                                            type="button"
                                            disabled={isLoading}
                                        >
                                            Загрузка...
                                        </button>
                                    :
                                    (filteredApartments) ?
                                        (showedApartments) ?
                                            (showedApartments.length < filteredApartments.length) ?
                                                <button 
                                                    className="apartments-form__form-output-button button" 
                                                    type="button"
                                                    disabled={isLoading}
                                                    onClick={() => {
                                                        setShowLimit(showLimit => ({
                                                            ...showLimit,
                                                            toShow: showLimit.toShow + showLimit.step,
                                                        }))
                                                    }   
                                                    }
                                                >
                                                    Показать ещё
                                                </button>
                                            :
                                            null
                                        :
                                        <button 
                                            className="apartments-form__form-output-button button" 
                                            type="button"
                                            disabled={isLoading}
                                            onClick={fetchApartments}
                                        >
                                            Ошибка! Повторить загрузку
                                        </button>
                                    :
                                    (apartments) ?
                                        (showedApartments) ?
                                            (showedApartments.length < apartments.length) ?
                                            <button 
                                                className="apartments-form__form-output-button button" 
                                                type="button"
                                                disabled={isLoading}
                                                onClick={() => {
                                                    setShowLimit(showLimit => ({
                                                        ...showLimit,
                                                        toShow: showLimit.toShow + showLimit.step,
                                                    }))
                                                }   
                                                }
                                            >
                                                Показать ещё
                                            </button>
                                            :
                                            null
                                        :
                                        <button 
                                            className="apartments-form__form-output-button button" 
                                            type="button"
                                            disabled={isLoading}
                                            onClick={fetchApartments}
                                        >
                                            Ошибка! Повторить загрузку
                                        </button>
                                    :
                                    <button 
                                        className="apartments-form__form-output-button button" 
                                        type="button"
                                        disabled={isLoading}
                                        onClick={fetchApartments}
                                    >
                                        Ошибка! Повторить загрузку
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


