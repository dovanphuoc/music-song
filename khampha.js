// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)
const arrowLeft = '<i class="fa-solid fa-arrow-left"></i>'
const arrowRight = '<i class="fa-solid fa-arrow-right"></i>'
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    autoplay:true,
    dots: false,
    navText: [
      arrowLeft, 
      arrowRight
    ],
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  })
})
