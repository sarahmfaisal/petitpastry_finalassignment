let slideIndex=0;
const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

function showSlide(index){
  slides.forEach(slide=> slide.classList.remove("active"));
  dots.forEach(dot=> dot.classList.remove("active"));
  
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide(){
  slideIndex=(slideIndex + 1)%slides.length;
  showSlide(slideIndex);
}

function prevSlide(){
  slideIndex=(slideIndex - 1 + slides.length)%slides.length;
  showSlide(slideIndex);
}

function currentSlide(index){
  slideIndex=index;
  showSlide(slideIndex);
}

/*Auto Slide(optional)*/
setInterval(nextSlide,4000);