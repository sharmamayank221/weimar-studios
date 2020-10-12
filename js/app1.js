const navSlider = () => {
  const burgery = document.querySelector(".burger-about");
  const navy = document.querySelector(" .about-links");
  const navLink = document.querySelectorAll(".about-links li");
  burgery.addEventListener("click", () => {
    navy.classList.toggle("nav-active");

    //   animate links
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
  });
};
navSlider();

//   var lastScrollTop = 0;
//         navbar = document.getElementsByClassName("nav");
// window.addEventListener('scroll', function() {
//     var scrollTop = window.pageYOffset || documentElement.scrollTop;
//     if(scrollTop > lastScrollTop) {
//         navbar.style.top = "-40vh";
//     } else {
//         navar.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// })
