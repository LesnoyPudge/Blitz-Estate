import React, { useContext, useState } from "react";
import ReactDom from 'react-dom';
import { ModalContext } from "../../contexts";
import { MoreInfoModal, AskQuestionModal, MakeAppointmentModal, OrderCallModal, ThanksModal } from ".";



export function Modal(props) {
    const { closeModal } = useContext(ModalContext);
    const [lastModal, setLastModal] = useState(null);
    
    

    function modalSwitch() {
        switch (props.target.dataset.modal) {
            case 'moreInfo':
                setLastModal([
                    props, 
                    <MoreInfoModal 
                        onClick={closeModal}
                    />
                ]);
                break;
                
            case 'askQuestion':
                setLastModal([
                    props, 
                    <AskQuestionModal 
                        onClick={closeModal}
                    />
                ]);
                break;
                
            case 'orderCall':
                setLastModal([
                    props, 
                    <OrderCallModal
                        onClick={closeModal}
                    />
                ]);
                break;
                
            case 'makeAppointment':
                setLastModal([
                    props, 
                    <MakeAppointmentModal  
                        onClick={closeModal}
                        id={props.target.dataset.id}
                    />
                ]);
                break;
                
            case 'thanks':
                setLastModal([
                    props, 
                    <ThanksModal 
                        onClick={closeModal}
                    />
                ]);
                break;
                
            default:
                return closeModal();
        }
    }


    return ReactDom.createPortal(
        <>
            <div 
                className={
                    "modal" + ((props.isOpened) ? ' modal--active ' : '') +
                    ((props.target) ? ' modal--' + props.target.dataset.modalType : '')
                } 
                onClick={closeModal}
            >
                <div className="modal__inner modal-inner" onClick={(e) => {e.stopPropagation()}}>
                    {
                        (props.isOpened) ?
                            (lastModal && lastModal[0] === props) ?
                                lastModal[1]
                            :
                            modalSwitch()
                        :
                        (lastModal) ?
                            lastModal[1]
                        :
                        null
                    }   
                </div>
            </div>
        </>, 
        document.querySelector('#root-modals')
    );
}