const socialsButton = document.querySelector('.fa-envelope');
const socialsClose = document.querySelector('.icon-times');
const socialsIcons = document.querySelector('.social-icons');


socialsButton.addEventListener('click', () => {
    socialsButton.classList.toggle('menu-button-out');
    setTimeout(() => {
        socialsIcons.classList.toggle('menu-active');
        socialsButton.classList.toggle('x-icon');
        socialsClose.classList.toggle('x-icon');
    }, 400);
});


socialsClose.addEventListener('click', () => {
    socialsIcons.classList.toggle('menu-active');

    setTimeout(() => {
        socialsButton.classList.toggle('x-icon');
    }, 300);

    setTimeout(() => {
        socialsClose.classList.toggle('x-icon');
        socialsButton.classList.toggle('menu-button-out');
    }, 400);
});



