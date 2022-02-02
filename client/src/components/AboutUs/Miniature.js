


export function Miniature(props) {

    function onClick() {
        const onClick = props.onClick;
        onClick(props.id);
    }

    return (
        <li 
            className={"galery__miniature miniature" + ((props.isActive) ? ' miniature--active ' : '')} 
            onClick={onClick}
        >
            <picture className="miniature__image">
                <source srcSet={"./images/" + props.image.src} type="image/webp" />
                <img src={"./images/" + props.image.src} alt="Изображение апартаментов" className="image" />
            </picture>
        </li>
    );
}