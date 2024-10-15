// .........................home pages..............................
// navbar js ....................
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".main_navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});
// ........................counter section start ...............................
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");
  const speed = 200; // The lower the number, the faster the count

  const startCounting = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;

        // Determine the increment
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target + "+"; // Add the '+' sign
        }
      };

      // Trigger counting function
      updateCount();
    });
  };

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startCounting();
        observer.disconnect(); // Stop observing after counting starts
      }
    },
    { threshold: 0.5 }
  ); // Adjust threshold for when to start (0.5 means halfway into view)

  // Observe the counter section
  const counterSection = document.querySelector(".counter.number");
  observer.observe(counterSection);
});
const slider = document.getElementById("slider");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let scrollAmount = 0;
const cardWidth = 300; // Card width including margins
const maxScroll =
  cardWidth * 4 - document.querySelector(".slider-container").offsetWidth;

rightArrow.addEventListener("click", () => {
  if (scrollAmount < maxScroll) {
    scrollAmount += cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

leftArrow.addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});
//  ...............counter section end............................

// .....................................

(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);

// ...........................about pages........................
// owlCarousel script...
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  navText: [],
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
