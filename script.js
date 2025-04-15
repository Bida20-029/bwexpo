// ===============================
// NAVIGATION MENU TOGGLE
// ===============================
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("collapsed");
});

const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// ===============================
// HOMEPAGE SLIDESHOW (e.g. hero section)
// ===============================
let slideIndex = 0;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
  autoSlide();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n);
  autoSlide();
}

function autoSlide() {
  slideTimer = setTimeout(() => {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("slide").length) {
      slideIndex = 1;
    }
    showSlides(slideIndex);
    autoSlide();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  slideIndex = 1;
  showSlides(slideIndex);
  autoSlide();
});


// ===============================
// ARC ARRANGEMENT FOR EXPLORE ACTIVITY CIRCLES
// ===============================
function arrangeInArc() {
  const items = document.querySelectorAll('.circle-arc .activity');
  const centerX = 200;
  const centerY = 150;
  const arcRadius = 120;
  const total = items.length;

  const angleStart = -Math.PI / 3; // -60°
  const angleEnd = Math.PI / 3;    // +60°

  items.forEach((item, index) => {
    const angle = angleStart + (index / (total - 1)) * (angleEnd - angleStart);
    const x = centerX + arcRadius * Math.cos(angle) - item.offsetWidth / 2;
    const y = centerY + arcRadius * Math.sin(angle) - item.offsetHeight / 2;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
  });
}

document.addEventListener("DOMContentLoaded", arrangeInArc);

function toggleOverlay(item) {
  // Close all other overlays
  document.querySelectorAll('.circle-item.active').forEach(el => {
    if (el !== item) el.classList.remove('active');
  });
  // Toggle current one
  item.classList.toggle('active');
}



// ===============================
// BACK TO TOP BUTTON
// ===============================
const btn = document.getElementById("back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


// ===============================
// EVENT SECTION SLIDESHOW (animated + auto)
// ===============================
// Event Slideshow
let eventSlideIndex = 1;
let eventSlideTimer;

function showEventSlides(n) {
  const slides = document.getElementsByClassName("event-slide");
  const dots = document.getElementsByClassName("event-dot");

  if (n > slides.length) eventSlideIndex = 1;
  if (n < 1) eventSlideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[eventSlideIndex - 1].classList.add("active");
  dots[eventSlideIndex - 1].classList.add("active");
}

function plusEventSlides(n) {
  clearTimeout(eventSlideTimer); // stop auto
  showEventSlides(eventSlideIndex += n); // update index
  autoEventSlide(); // restart timer
}


function currentEventSlide(n) {
  clearTimeout(eventSlideTimer);
  showEventSlides(eventSlideIndex = n);
  autoEventSlide();
}

function autoEventSlide() {
  eventSlideTimer = setTimeout(() => {
    eventSlideIndex++;
    showEventSlides(eventSlideIndex);
    autoEventSlide();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  showEventSlides(eventSlideIndex);
  autoEventSlide();
});

function toggleOverlay(item) {
  // Close all other overlays
  document.querySelectorAll('.active').forEach(el => {
    if (el !== item) el.classList.remove('active');
  });
  // Toggle this one
  item.classList.toggle('active');
}
