const productCard = document.querySelectorAll('.product__card-wrapper');
const header = document.querySelector('.header__container-second');
const headerBtn = document.querySelector('.burger')
const headerSecond = document.querySelector('.header-second');



productCard.forEach((element) => {
    const btn = element.querySelector('.content__button');
    element.addEventListener('mouseover', () => {
        btn.style.opacity = '1';
    });
    element.addEventListener('mouseout', () => {
        btn.style.opacity = '0';
    });    
});

headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('open');
    headerSecond.classList.toggle('active');
});





