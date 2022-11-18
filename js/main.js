const menuBtn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".main_menu");

const video = document.querySelector("video");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

function playPause() {
  if (video.paused) video.play();
  else video.pause();
}

// to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//slider

var slideIndex = 2;
showSlider(slideIndex);

function currentSlider(n) {
  showSlider((slideIndex = n));
}

function showSlider(n) {
  var i;
  var slider = document.getElementsByClassName("mySlider");
  var dots = document.getElementsByClassName("inline");
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
