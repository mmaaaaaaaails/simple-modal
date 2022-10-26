const btn = document.querySelector(".btn_modal_window");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close_modal_window");

btn.addEventListener('click', () => {
    modal.classList.add('modal-vis');
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-vis');
})

document.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal-vis');
    }
})

