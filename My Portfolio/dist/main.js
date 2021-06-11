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


