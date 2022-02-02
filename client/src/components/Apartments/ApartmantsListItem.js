import { ModalOpenButton } from "..";



export function ApartmentsListItem(props) {
    const {_id, label, image, lot, price, area, floor} = props.apartment;



    function formatPrice(price) {
        price = Math.round(price).toString();

        if (price.length <= 3) return price;
      
        let formatedPrice = '';
        let k = 0;
        price = price.split('')
        
        for (let i = price.length - 1; i >= 0; i--) {
          if (((k) % 3 === 0) && (i + 1) !== price.length) {
            price[i] = price[i] + ',';
            formatedPrice = price[i] + formatedPrice;
            k++;
            continue;
          }
          
          k++;
          formatedPrice = price[i] + formatedPrice;
        }

        return formatedPrice;
    }

    return (
        <li className="apartments-form-output__item" data-aos="fade">
            <div className="apartments-form-output__item-inner" >
                <picture className="apartments-form-output__item-image">
                    <source srcSet={"./images/"+ image +".jpg"} type="image/webp" />
                    <img src={"./images/"+ image +".jpg"} alt="Изображение апартаментов" className="image" />
                </picture>
                
                <div className="apartments-form-output__item-content">
                    <h5 className="apartments-form-output__item-title">
                        {label}
                    </h5>
                    
                    <p className="apartments-form-output__item-subtitle">
                        Лот №{lot}
                    </p>
                    
                    <div className="apartments-form-output__item-description">
                        <div className="apartments-form-output__item-price">
                            <div className="apartments-form-output__item-price-full">
                                {formatPrice(price)} ₽
                            </div>
                            
                            <div className="apartments-form-output__item-price-per-square">
                                {formatPrice((price / area))} ₽ за м²
                            </div>
                        </div>
                        
                        <div className="apartments-form-output__item-location">
                            <div className="apartments-form-output__item-location-area">
                                Площадь {area} м²
                            </div>
                            
                            <div className="apartments-form-output__item-location-floor">
                                Этаж {floor}
                            </div>
                        </div>
                    </div>
                </div>
                
                <ModalOpenButton>
                    <button 
                        className="apartments-form-output__item-button button" 
                        data-modal="makeAppointment" 
                        data-modal-type="form"
                        type="button"
                        onClick={props.onClick}
                        data-id={_id}
                    >
                        Назначить просмотр
                    </button>
                </ModalOpenButton>
            </div>
        </li>
    );
}