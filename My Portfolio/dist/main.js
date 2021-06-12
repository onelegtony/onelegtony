// Imports from modules.
import { socialsToggle, modesToggle, closeSocials, closeModes, openSocialsFunction, closeSocialsFunction, openModesFunction, closeModesFunction } from './modules/menus.js';
import { lightModeButton, darkModeButton, lightModeToggle, darkModeToggle } from './modules/color_modes.js'


// Opening menu with socials.
socialsToggle.addEventListener('click', openSocialsFunction);
// Closing menu with socials.
closeSocials.addEventListener('click', closeSocialsFunction);

// Opening menu with site modes.
modesToggle.addEventListener('click', openModesFunction);
// Closing menu with site modes.
closeModes.addEventListener('click', closeModesFunction);


//Changing color modes.
lightModeButton.addEventListener('click', lightModeToggle);
darkModeButton.addEventListener('click', darkModeToggle);



const projectBoxes = document.querySelectorAll('.projects');
const projectImage = document.querySelectorAll('.portfolio-img-ctr');

projectBoxes.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        box.firstElementChild.style.opacity = 1;
        projectImage[index].style.transform = 'scale(1.2)';
    })
    box.addEventListener('mouseout', () => {
        box.firstElementChild.style.opacity = 0;
        projectImage[index].style.transform = 'scale(1)';
    })
})

