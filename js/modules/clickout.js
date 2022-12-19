export default function clickOut(element, callback) {
    const html = document.documentElement;
    
    if (!element.hasAttribute('data-outside')) {
        element.setAttribute('data-outside', '')
        html.addEventListener('click', handleClickOut, event.stopPropagation())
    }
    
    function handleClickOut(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute('data-outside');
            html.removeEventListener('click', handleClickOut, event.stopPropagation());
            callback()
        }
    }
}