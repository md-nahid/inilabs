let x = document.querySelector('.open_mobile_menu');
let y = document.querySelector('.close_mobile_menu');
let menu = document.querySelector('nav > div > ul');
let body = document.body;
let allNavLinks = document.querySelectorAll('nav > div > ul > li > a');
const dropdownNavLinks = document.querySelectorAll('nav > div > ul > li > ul > li > a');
const bannerSlide = document.querySelector('.banner_slide');
const navigationHeader = document.querySelector('.header_navigation');

// mobile menu show
x.addEventListener('click', () => {
  if (window.innerWidth < 993) {
    menu.classList.add('show_mobile_nav');
    body.style.overflow = 'hidden';
  }
});

// mobile menu close
y.addEventListener('click', () => {
  if (window.innerWidth < 993) {
    menu.classList.remove('show_mobile_nav');
    body.style.overflow = '';
    allNavLinks.forEach((l) => {
      const h = 0 + 'px';
      if (l.nextElementSibling) {
        l.nextElementSibling.style.height = h;
      }
    });
  }
});

// mobile menu close
allNavLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const h = 0 + 'px';
    if (window.innerWidth < 993) {
      let dropdown = e.currentTarget.nextElementSibling;
      if (dropdown) {
        if (dropdown.style.height > h) {
          dropdown.style.height = h;
        } else {
          dropdown.style.height = dropdown.scrollHeight + 'px';
        }
      } else {
        if (menu.classList.contains('show_mobile_nav')) {
          menu.classList.remove('show_mobile_nav');
          body.style.overflow = '';
        }
        allNavLinks.forEach((l) => {
          if (l.nextElementSibling) {
            l.nextElementSibling.style.height = h;
          }
        });
      }
    }
    allNavLinks.forEach((link) => {
      if (link.classList.contains('nav_link_active')) {
        link.classList.remove('nav_link_active');
      }
    });
    link.classList.add('nav_link_active');
  });
});

// dropdown nav links click function
dropdownNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 993) {
      if (menu.classList.contains('show_mobile_nav')) {
        menu.classList.remove('show_mobile_nav');
        body.style.overflow = '';
      }
      allNavLinks.forEach((l) => {
        const h = 0 + 'px';
        if (l.nextElementSibling) {
          l.nextElementSibling.style.height = h;
        }
      });
    }
  });
});

// navigation background on scroll
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navigationHeader.classList.add('sticky');
  } else {
    navigationHeader.classList.remove('sticky');
  }
});

// // banner data
// const alltitle = [
//   {
//     id: 1,
//     title: `<h2>End-to-End <br> Blockchain <br> Development </h2>`,
//   },
//   {
//     id: 2,
//     title: `<h2>We can make <br> your blockchain <br> project a reality.</h2>`,
//   },
//   {
//     id: 3,
//     title: `<h2>PARIS Web3 Lab <br> A Team <br> of Experts </h2>`,
//   },
// ];

// // banner slide show
// let i = 0;
// function bannerSlideShow() {
//   if (i > 2) {
//     i = 0;
//   } else {
//     i++;
//   }
//   alltitle.map((item) => {
//     if (item.id == i) {
//       bannerSlide.innerHTML = item.title;
//     }
//   });
// }
// bannerSlideShow();
// setInterval(bannerSlideShow, 4000);

// // technologies we use infinite swiper slider initialize
// const swiper = new Swiper('.technologies_we_use_infinite_slider', {
//   slidesPerView: 8,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     pauseOnMouseEnter: true,
//     disableOnInteraction: false,
//   },
//   speed: 2000,
//   breakpoints: {
//     375: {
//       slidesPerView: 2,
//     },
//     575: {
//       slidesPerView: 3,
//     },
//     768: {
//       slidesPerView: 4,
//     },
//     992: {
//       slidesPerView: 6,
//     },
//     1100: {
//       slidesPerView: 8,
//     },
//   },
// });

// // our portfolios swiper slider initialize
// const swiperTwo = new Swiper('.our_portfolios_swiper_slider', {
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 3000,
//     pauseOnMouseEnter: true,
//   },
//   speed: 2000,
//   breakpoints: {
//     375: {
//       slidesPerView: 1.3,
//       spaceBetween: 20,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });

// // our_partners_infinite_slider infinite swiper slider initialize
// const swiperThree = new Swiper('.our_partners_infinite_slider', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     pauseOnMouseEnter: true,
//     disableOnInteraction: false,
//   },
//   speed: 2000,
//   breakpoints: {
//     375: {
//       slidesPerView: 1.5,
//     },
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1100: {
//       slidesPerView: 4,
//     },
//     1400: {
//       slidesPerView: 5,
//     },
//   },
// });

// // scroll with offset
// function scrollToTargetAdjusted(text) {
//   var element = document.getElementById(`${text.target.textContent}`);
//   var headerOffset = 200;
//   var elementPosition = element.getBoundingClientRect().top;
//   var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//   window.scrollTo({
//     top: offsetPosition,
//     behavior: 'smooth',
//   });
// }
