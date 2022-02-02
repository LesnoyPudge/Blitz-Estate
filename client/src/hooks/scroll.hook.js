


export function useScroll() {

    function scrollToElement(selector, block='start') {
        const target = document.querySelector(selector);

        try {
            target.scrollIntoView({block, behavior: "smooth"});
        } catch (error) {
            console.log(error);
        }
    }

    return {scrollToElement};
}