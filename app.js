function downloadCV() {
  const link = document.createElement("a");
  link.href = "./Main Resume Ismayil.pdf";
  link.download = "main-resume-ismayil.pdf";
  link.click();
}

AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
