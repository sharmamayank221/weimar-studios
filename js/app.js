const navBanner = document.getElementById('nav');

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar .main-links");
  const navLinks = document.querySelectorAll(".main-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //   animate links
    navLinks.forEach((link, index) => {
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

const hideNavBanner = () => {
  setInterval(() => {
navBanner.hidden = true;
  }, 900)
}

// On scroll event listener for hiding navbar
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    navBanner.classList.add("animate")
    hideNavBanner();
  }

})

navSlide();


