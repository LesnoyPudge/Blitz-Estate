import { useEffect, useState } from "react";



export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(min-width: 993px)").matches) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize, true);

        return () => {
            window.removeEventListener('resize', handleResize, true)
        };
    }, []);
    

    return isMobile;
}