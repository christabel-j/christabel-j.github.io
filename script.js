const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grapCursor: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// project overlay
document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".project-menu");
  const closeButtons = document.querySelectorAll(".exit-project-info");
  const projectOverlays = document.querySelectorAll(".project-overlay");

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      projectOverlays[index].style.display = "flex";
    });
  });

  closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      projectOverlays[index].style.display = "none";
    });
  });
});

// scroll animations

// const home = document.getElementById("home");

// const options = {
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// const observer = new IntersectionObserver(callbackFunction, options);

// function callbackFunction(enteries) {
//   enteries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       if (entry.target.id === "home") {
//         entry.target.classList.add("loaded");
//       }

//       if (entry.target.id === 'second-section') {
//         entry.target.classList.add('fade-in')
//       }

//       if (entry.target.id === 'third-section') {
//         entry.target.classList.add('animate')
//       }

//       // everything
//       observer.unobserve(entry.target);
//     }
//   });
// }

// observer.observe(home);
// observer.observe(secondSection);
// observer.observe(thirdSection);
