$(document).ready(function(){
  var one = $("#one");
  var two = $("#two");
  one.owlCarousel({
 loop:true,
 dots:false,
 autoplay:true,
 autoplayTimeout:2000,
 margin:50,
 center:true,
 responsive:{
     0:{
         items:2
     },
     600:{
         items:3
     },
     1000:{
         items:6
     }
 }
 });
 two.owlCarousel({
  loop:true,
  autoplayTimeout:4000,
  margin:50,
  center:true,
  nav:true,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
  });
 });
const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }
    })
