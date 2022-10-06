export default function initModal() {
    const btnEntrar = document.querySelector('[data-modal="btn-entrar"]');
    const btnClose = document.querySelector('[data-modal="btn-close"]')
    const containerModal = document.querySelector('[data-modal="container"')
    
    function toggleModal() {
        containerModal.classList.toggle('ativo');
    }

    function closeClickModal(event) {
        if(this === event.target) {
            toggleModal()
        }
    }

    function closeKeyModal(event) {
        const modalActive = containerModal.classList.contains('ativo')
        if(modalActive && event.key === 'Escape') {
            toggleModal()
        }
    }
    
    btnEntrar.addEventListener('click', toggleModal)
    btnClose.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', closeClickModal)
    window.addEventListener('keydown', closeKeyModal)
}