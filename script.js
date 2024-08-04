document.querySelector(".contact-btn").addEventListener("click", function () {
  gsap.to(".profile-card", { x: -500, opacity: 0, duration: 1 });
});

document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".nav-link").forEach(function (navLink) {
      navLink.classList.remove("active");
    });
    this.classList.add("active");
  });
});
