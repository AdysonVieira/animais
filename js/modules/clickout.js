export default function clickOut(element, events, callback) {
    const html = document.documentElement;
    
    if (!element.hasAttribute('data-outside')) {
        element.setAttribute('data-outside', '')
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleClickOut)
        })
    }
    
    function handleClickOut(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute('data-outside')
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleClickOut)
            })

        }
    }
    callback()
}