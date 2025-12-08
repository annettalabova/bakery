const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};

modalBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBtnClose.addEventListener('click', toggleModal);
