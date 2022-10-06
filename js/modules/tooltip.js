export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', onMouseOver)
    })
    
    function onMouseOver() {
        const tooltipBox = createTooltipBox(this);
        
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
        
        onMouseMove.tooltipBox = tooltipBox;
        onMouseMove.element = this;
        this.addEventListener('mousemove', onMouseMove);
    }

    const onMouseLeave = {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    const onMouseMove = {
        tooltipBox: '',
        element: '',
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 +'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function createTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerHTML = text;
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}
