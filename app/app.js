// Background overlay
window.addEventListener("mousemove", function (e) {
  let bgOverlay = document.querySelector(".bg-overlay");

  // getting mouse data
  let coordinateX = e.screenX;

  bgOverlay.style.backgroundPositionX = coordinateX * 0.1 + "%";
});

// // collapsible nav

// let collapsibleNav = document.getElementsByClassName("collapsible-nav");
// let navItem;

// for (navItem = 0; navItem < collapsibleNav.length; navItem++) {
//   collapsibleNav[navItem].addEventListener("click", function () {
//     this.classList.toggle("collapsibleActive");
//     let content = this.lastElementChild;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

// Burger toggle
const navSlide = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-item");

  burger.addEventListener("click", () => {
    // Burger toggle menu
    nav.classList.toggle("nav-active");

    // Burger animations
    burger.classList.toggle("toggle");
  });
};
navSlide();

// Sticky navigation

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  navOnScroll();
};

// Get the navbar
// let navbar = document.getElementById("nav-bar");

// // Get the offset position of the navbar
// let sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function navOnScroll() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("change-nav");
//   } else {
//     navbar.classList.remove("change-nav");
//   }
// }

let scrollTrigger = 100;
let changeOnScroll = "change-nav";

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(changeOnScroll);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(changeOnScroll);
  }
};

// // Nav collapsible icon

// let collapsibleNav = document.getElementsByClassName("collapsible-nav-links");
// let navItem;

// for (navItem = 0; navItem < collapsibleNav.length; navItem++) {
//   collapsibleNav[navItem].addEventListener("mouseover", function () {
//     this.classList.add("navActive");
//   });

//   collapsibleNav[navItem].addEventListener("mouseout", function () {
//     this.classList.remove("navActive");
//   });
// }

// Slide show
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
}

// Automatic slides
let mySlideIndex = 0;
myShowSlides();

function myShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  mySlideIndex++;
  if (mySlideIndex > slides.length) {
    mySlideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[mySlideIndex - 1].style.display = "block";
  dots[mySlideIndex - 1].className += " activeDot";
  setTimeout(myShowSlides, 3000); // Change image every 3 seconds
}

// About section collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("aboutSectionActive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Automatic galeri slides
// Slide show
let myGaleriSlideIndex = 1;
myGaleriShowSlides(myGaleriSlideIndex);

function galeriPlusSlides(n) {
  myGaleriShowSlides((myGaleriSlideIndex += n));
}

// Thumbnail image controls
function galeriCurrentSlide(n) {
  myGaleriShowSlides((myGaleriSlideIndex = n));
}

function myGaleriShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("galeriSlides");
  let dots = document.getElementsByClassName("galeriDot");
  if (n > slides.length) {
    myGaleriSlideIndex = 1;
  }
  if (n < 1) {
    myGaleriSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" galeriActiveDot", "");
  }
  slides[myGaleriSlideIndex - 1].style.display = "block";
  dots[myGaleriSlideIndex - 1].className += " galeriActiveDot";
}

// Automatic changing slides

let galeriSlideIndex = 0;
galeriShowSlides();

function galeriShowSlides() {
  let i;
  let slides = document.getElementsByClassName("galeriSlides");
  let dots = document.getElementsByClassName("galeriDot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  galeriSlideIndex++;
  if (galeriSlideIndex > slides.length) {
    galeriSlideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" galeriActiveDot", "");
  }
  slides[galeriSlideIndex - 1].style.display = "block";
  dots[galeriSlideIndex - 1].className += " galeriActiveDot";
  setTimeout(galeriShowSlides, 3000); // Change image every 3 seconds
}

// Rundown section collapsible

let collapsibleRundown = document.getElementsByClassName("collapsible-rundown");
let rundownItem;

for (rundownItem = 0; rundownItem < collapsibleRundown.length; rundownItem++) {
  collapsibleRundown[rundownItem].addEventListener("click", function () {
    this.classList.toggle("rundownActive");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Automatic prizes slides
// Slide show
let myPrizesSlideIndex = 1;
myPrizesShowSlides(myPrizesSlideIndex);

function prizesPlusSlides(n) {
  myPrizesShowSlides((myPrizesSlideIndex += n));
}

// Thumbnail image controls
function prizesCurrentSlide(n) {
  myPrizesShowSlides((myPrizesSlideIndex = n));
}

function myPrizesShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("prizesSlides");
  let dots = document.getElementsByClassName("prizeDot");
  if (n > slides.length) {
    myPrizesSlideIndex = 1;
  }
  if (n < 1) {
    myPrizesSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" prizesActiveDot", "");
  }
  slides[myPrizesSlideIndex - 1].style.display = "block";
  dots[myPrizesSlideIndex - 1].className += " prizesActiveDot";
}

// Automatic changing slides

let prizesSlideIndex = 0;
prizesShowSlides();

function prizesShowSlides() {
  let i;
  let slides = document.getElementsByClassName("prizesSlides");
  let dots = document.getElementsByClassName("prizeDot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  prizesSlideIndex++;
  if (prizesSlideIndex > slides.length) {
    prizesSlideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" prizesActiveDot", "");
  }
  slides[prizesSlideIndex - 1].style.display = "block";
  dots[prizesSlideIndex - 1].className += " prizesActiveDot";
  setTimeout(prizesShowSlides, 3000); // Change image every 3 seconds
}
