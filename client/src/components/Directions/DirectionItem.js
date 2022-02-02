import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../hooks/mobile.hook";
import { useIsThrottle } from "../../hooks/throttle.hook";



export function DirectionItem({direction}) {
    const isMobile = useIsMobile();
    const maxValue = 6;
    const minValue = -6;
    const interval = Math.abs(maxValue) + Math.abs(minValue);
    const ref = useRef();
    const [style, setStyle] = useState({
        transform: '',
        boxShadow: '',
    });
    const {isThrottle, setIsThrottle, throttle} = useIsThrottle(50);
    const [mousePos, setMousePos] = useState({
        X: null,
        Y: null
    });



    useEffect(() => {
        if (isMobile) {
            setStyle({
                transform: '',
                boxShadow: '',
            });
        }
    }, [isMobile]);

    function handlerMove(e) {
        if (isThrottle) return;

        const target = ref.current;

        setMousePos({
            X: e.pageX - target.offsetLeft,
            Y: e.pageY - target.offsetTop,
        });

        let rotateXDeg = -(Math.round((mousePos.Y / (target.clientHeight / interval) - (interval / 2)) * 100) / 100);
        let rotateYDeg = Math.round((mousePos.X / (target.clientWidth / interval) - (interval / 2)) * 100) / 100;
    
        if (rotateXDeg > maxValue) {
            rotateXDeg = maxValue;
        } else if (rotateXDeg < minValue) {
            rotateXDeg = minValue;
        }
    
        if (rotateYDeg > maxValue) {
            rotateYDeg = maxValue;
        } else if (rotateYDeg < minValue) {
            rotateYDeg = minValue;
        }

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateXDeg}deg) rotateY(${rotateYDeg}deg) scale(1.02)`,
            boxShadow: `${-(rotateYDeg) * 1.5}px ${rotateXDeg * 1.5}px 15px 2px rgba(34, 60, 80, 0.2)`,
        });

        throttle();
    }

    function handlerLeave() {
        setStyle({
            transform: '',
            boxShadow: '',
        });

        setIsThrottle(false);
    }

    return (
        <li 
            className="directions__item" 
            ref={ref}
            onMouseMove={(!isMobile) ? handlerMove : null} 
            onMouseLeave={(!isMobile) ? handlerLeave : null}
            style={(!isMobile) ? style : null}
            data-aos="fade-up"
        >
            <h5 className="directions__item-title">
                {direction.label}
            </h5>
            
            <div className="directions__item-content">
                <div className="directions__item-contact-info">
                    <div className="directions__item-job">
                        Руководитель:
                    </div>
                    
                    <div className="directions__item-name">
                        {direction.leader}
                    </div>
                    
                    <a className="directions__item-phone" href={"tel: "+ direction.phone +""}>
                        {direction.phone}
                    </a>
                    
                    <a className="directions__item-email" href={"mailto: "+ direction.email +""}>
                        {direction.email}
                    </a>
                </div>
                
                <img className="directions__item-image" src={"./images/" + direction.image +""} alt="" />
            </div>
        </li>
    );
}