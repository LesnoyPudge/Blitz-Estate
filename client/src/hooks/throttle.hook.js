import { useState } from "react";



export function useIsThrottle(throttleTime = 50) {
    const [isThrottle, setIsThrottle] = useState(false);

    function throttle() {
        setIsThrottle(true);

        setTimeout(() => {
            setIsThrottle(false);
        }, throttleTime);
    }
    

    return {
        isThrottle,
        setIsThrottle,
        throttle,
    };
}