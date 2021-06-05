const socialsButton = document.querySelector('.fa-envelope');

socialsButton.addEventListener('click', () => {
    let socialIcons = document.querySelectorAll('#social-button');

    for (let i = 0; i < socialIcons.length; i++) {
        if (socialIcons[i].classList.contains('icon-hide')) {
            socialIcons[i].classList.remove('icon-hide');
            socialIcons[i].style.transform = 'translateY(0)';
        } else {
            document.querySelector('.codecademy').style.transform = 'translateY(132px)';
            document.querySelector('.git-icon').style.transform = 'translateY(66px)';
            document.querySelector('.fa-linkedin-in').style.transform = 'translateY(-66px)';
            document.querySelector('.fb-icon').style.transform = 'translateY(-135px)';
            socialIcons[i].classList.add('icon-hide');
        };
    };
})