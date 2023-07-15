var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); 
}
$('.sliderProduct').slick({
    
  centerMode: true,
  centerPadding: '10%',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    }
  ],
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`
  });
  $('.wrapSliser').slick({
    prevArrow: `<button type='button' class='slick-prev2 slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next2 slick-arrow'><i class="fas fa-arrow-right"></i></button>`
  });
  let toTop=document.getElementById('onTop');
 
  window.addEventListener('scroll',()=>{
   
  })
  toTop.onclick=function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
 
 
     