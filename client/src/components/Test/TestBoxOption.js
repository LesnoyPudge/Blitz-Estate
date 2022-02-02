


export function TestBoxOption(props) {

    if (!props.option) return;

    return (
        <div 
            className={"test-box__item-option" + ((props.isActive) ? ' test-box__item-option--active' : '')} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}
        >
            <picture className="test-box__item-option-image">
                <source srcSet={"./images/" + props.option.image + ".jpg"} type="image/webp" />
                <img src={"./images/" + props.option.image + ".jpg"} alt={props.option.label} className="image" />
            </picture>
            
            <span className="test-box__item-option-title">
                {props.option.label}
            </span>
        </div>
    );
}