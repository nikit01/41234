let offset = 0;
const slaiderLine = document.querySelector('.slaider--line');
document.querySelector('.btn--next').addEventListener('click', function(){
    offset = offset + 1423;
    if(offset > 5692){
        offset = 0;
    }
    slaiderLine.style.left = -offset + 'px';
});
document.querySelector('.btn--prev').addEventListener('click', function(){
    offset = offset - 1423;
    if(offset < 0){
        offset = 5692;
    }
    slaiderLine.style.left = -offset + 'px';
});
// 
let secHeading = document.querySelector('.sec--heading'),
    main = document.querySelector('main'),
    closeList = document.querySelector('.list--close'),
    burger = document.querySelector('.burger--btn'),
    burMenu = document.querySelector('.berger--btn--menu');

document.querySelector('.burger--btn').addEventListener('click',function(){
    closeList.classList.toggle('hidden');
    burger.classList.toggle('hidden');
    secHeading.classList.toggle('hidden');
    main.classList.toggle('hidden');
    burMenu.classList.toggle('hidden');   
});
document.querySelector('#list').addEventListener('click',function(){
    closeList.classList.toggle('hidden');
    burger.classList.toggle('hidden');
    secHeading.classList.toggle('hidden');
    main.classList.remove('hidden');
    burMenu.classList.toggle('hidden')
});
// 
$('.slaider--line--media').slick();
// 
$('.collection--case--media').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});
// выподающий список
let helps = document.querySelector('.footer--list--text'),
    helhArow = document.querySelector('.help--btn--arow');
document.querySelector('.help--button').addEventListener('click', function(){
    helps.classList.toggle('help--button--list')
    helhArow.classList.toggle('btn--tran')
})
let comp = document.querySelector('.list--text--comp'),
    compArow = document.querySelector('.comp--btn--arow');
document.querySelector('.company--button').addEventListener('click', function(){
    comp.classList.toggle('help--button--list')
    compArow.classList.toggle('btn--tran')
})