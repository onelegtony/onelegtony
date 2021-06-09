// Global variables.
const socialsToggle = document.querySelector('.envelope-icon');
const socialsIcons = document.querySelector('.social-icons');

const modesToggle = document.querySelector('.modes-toggle');
const modeIcons = document.querySelector('.site-modes');

const closeSocials = document.getElementById('close-socials');
const closeModes = document.getElementById('close-modes');


// Opening menu with socials.
socialsToggle.addEventListener('click', () => {
    socialsToggle.classList.toggle('menu-button-visible');
    modesToggle.classList.toggle('menu-button-visible');

    setTimeout(() => {
        socialsIcons.classList.toggle('menu-open');
        socialsToggle.classList.toggle('hide');
        modesToggle.classList.toggle('hide');
    }, 400);
});

// Closing menu with socials.
closeSocials.addEventListener('click', () => {
    socialsIcons.classList.toggle('menu-open');

    // Here the icons appear back before rolling down.
    setTimeout(() => { 
        socialsToggle.classList.toggle('hide');
        modesToggle.classList.toggle('hide');
    }, 300);

    // Here the icons actually roll back down, visible.
    setTimeout(() => {
        socialsToggle.classList.toggle('menu-button-visible');
        modesToggle.classList.toggle('menu-button-visible');
    }, 400);
});


// Opening menu with site modes.
modesToggle.addEventListener('click', () => {
    socialsToggle.classList.toggle('menu-button-visible');
    modesToggle.classList.toggle('menu-button-visible');

    setTimeout(() => {
        modeIcons.classList.toggle('menu-open');
        socialsToggle.classList.toggle('hide');
        modesToggle.classList.toggle('hide');
    }, 400);
});

// Closing menu with site modes.
closeModes.addEventListener('click', () => {
    modeIcons.classList.toggle('menu-open');

    // Here the icons appear back before rolling down.
    setTimeout(() => {
        socialsToggle.classList.toggle('hide');
        modesToggle.classList.toggle('hide');
    }, 300);

    // Here the icons actually roll back down, visible.
    setTimeout(() => {
        socialsToggle.classList.toggle('menu-button-visible');
        modesToggle.classList.toggle('menu-button-visible');
    }, 400);
});




















