$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
});


$('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
});


$('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


var typed = new Typed(".typing", {
    strings: ["Développeur Front-end"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Développeur Front-end"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
});

function togglePopup1(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active");
}

function togglePopup5(){
    document.getElementById("popup-5").classList.toggle("active");
}