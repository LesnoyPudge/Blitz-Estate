


export function useTools() {
    function toggleWindowLock(isOpen) {
        if (isOpen) {
            // scrollPadding();
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        } else {
            // scrollPadding();
            document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
            document.body.style.overflow = 'hidden';
        }
    }

    function setHeight(element) {
        if (element.style.height) {
            element.style.height = '';
        } else {
            element.style.height = element.scrollHeight + 'px';
        }
    }

    return {
        toggleWindowLock,
        setHeight,
    }
}

