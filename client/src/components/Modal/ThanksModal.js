import './index.scss';


export function ThanksModal(props) {
    return (
        <>
            <div>
  <div className="modal-inner__header">
    <div className="modal-inner__title">
      Мы с вами свяжемся.
    </div>
    <button className="modal-inner__close-button modal-close-button button" type="button" data-modal-elem-type="close">
      <svg className="image">
        <use xlinkHref="#close-button" />
      </svg>
    </button> 
  </div>
  <div className="modal-inner__content modal-content">
    <button className="submit-button button-animation button" type="button" data-modal-elem-type="close">
      Хорошо
    </button> 
  </div>
</div>

        </>
    );
}