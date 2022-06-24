let windowForm = document.querySelector('.window__container');
let headerButton = document.querySelector('.header__link.button');
let menuButton = document.querySelector('.menu__button');
let closeButton = document.querySelector('.window__close');
let headerContainer = document.querySelector('.header__container');
let arrow = document.querySelector('.arrow');
let html = document.html;

function onClick(){
    windowForm.classList.toggle('active');
}

headerButton.addEventListener('click', onClick);
closeButton.addEventListener('click', onClick);
menuButton.addEventListener('click', onClick);

window.addEventListener('scroll', function() {
    if(pageYOffset > 650){
        arrow.classList.add('arrow__active');
    }
    else{
        arrow.classList.remove('arrow__active');
    }
    console.log(pageYOffset);
});

function scrollUp(){
    window.scrollTo(0, 0); 
}

arrow.addEventListener('click', scrollUp);



