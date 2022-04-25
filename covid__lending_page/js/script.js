const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu_burger-active');
    e.currentTarget.classList.toggle('header__burger_cross');

})

// .header__burger_cross