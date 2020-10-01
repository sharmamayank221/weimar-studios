const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".nav", { y: "-150%", duration: 2, delay: 2 });

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav .main-links");
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
navSlide();
