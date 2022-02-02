import { MakeAppointmentForm } from '..';
import './index.scss';



export function MakeAppointmentModal(props) {
    return (
        <>
            <div className="modal-inner__header">
                <div className="modal-inner__title">
                Назначте встречу
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
                <MakeAppointmentForm
                    apartmentId={props.id}
                    onClick={props.onClick}
                />
            </div>
        </>
    );
}