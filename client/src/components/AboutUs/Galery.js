import { useState } from "react";
import { Miniature } from "./Miniature";



export function Galery(props) {
    const galery = [
        {
            src: 'about-us-image-1.jpg',
        },
        {
            src: 'about-us-image-2.jpg',
        },
        {
            src: 'about-us-image-3.jpg',
        },
        {
            src: 'about-us-image-4.jpg',
        },
    ];
    const [activeItem, setActiveItem] = useState(0);

    function handleClick(index) {
        setActiveItem(index);
    }

    return (
        <div className={((props.className) ? props.className : '') + ' galery '}>
            <picture className="galery__primary-image">
                <source srcSet={"./images/" + galery[activeItem].src} type="image/webp" />
                <img src={"./images/" + galery[activeItem].src} alt="Изображение апартаментов" className="image" />
            </picture>
            
            <ul className="galery__miniatures-list">
                {galery.map((image, index) => {
                    return (
                        <Miniature 
                            key={index}
                            id={index}
                            image={image}
                            isActive={activeItem === index}
                            onClick={handleClick}
                        />
                    );
                })}
            </ul>
        </div>
    );
}