let slide = document.querySelector('.banner-slider');
console.log(slide);
let i = 0,list_slide = ["url(../img/slide-bg-2.jpg)", "url(../img/slide-bg-1.jpg)"];

function next() {
    i++;
    if ( i == list_slide.length ) {
        i = 0;
    }
    slide.style.backgroundImage = list_slide[i];
}
setInterval(next, 2000);