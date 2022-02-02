import { AskQuestionForm } from '../Form/AskQuestionForm';
import './index.scss';


export function AskQuestionModal(props) {
    return (
        <>
            <div className="modal-inner__header">
                <div className="modal-inner__title">
                    Задайте свой вопрос
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
                <AskQuestionForm
                    onClick={props.onClick}
                />
            </div>
        </>
    );
}