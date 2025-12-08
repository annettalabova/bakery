document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBtnOpen = document.querySelector('.menu-btn-open');
  const menuBtnClose = document.querySelector('.menu-btn-close');
  const burger = document.querySelector('.header__burger');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');
  const html = document.documentElement; // ← вот это добавили

  if (!mobileMenu || !menuBtnOpen || !menuBtnClose) return;

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    html.classList.toggle('no-scroll'); // ← это добавили
    burger && burger.classList.toggle('is-open');
  };

  menuBtnOpen.addEventListener('click', toggleMobileMenu);
  menuBtnClose.addEventListener('click', toggleMobileMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
});
