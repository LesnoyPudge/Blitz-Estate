import { OrderCallForm } from '../Form/OrderCallForm';
import './index.scss';


export function OrderCallModal(props) {
    return (
        <>
          <div className="modal-inner__header">
            <div className="modal-inner__title">
              Выберите время и мы свяжемся с вами
            </div>
            <button 
                className="modal-inner__close-button modal-close-button button" 
                type="button"
                onClick={props.onClick}
            >
              <svg className="image">
                <use xlinkHref="#close-button" />
              </svg>
            </button> 
          </div>
          <div className="modal-inner__content modal-content">
            <OrderCallForm
                onClick={props.onClick}
            />
          </div>
        </>
    );
}