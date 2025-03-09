document.addEventListener("DOMContentLoaded", function() {
  // 1. TYPING EFFECT
  new Typed("#typing-text", {
    strings: [
      "AI Engineer...",
      "ML Engineer...",
      "Generative AI...",
      "Quantitative Analyst...",
      "Application Developer..."
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

  // 2. SCROLL REVEAL ANIMATION
  window.addEventListener("scroll", function () {
    const mainContent = document.getElementById("main-content");
    const introHeight = document.getElementById("intro").offsetHeight;
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    // Once we scroll halfway down the intro section...
    if (window.scrollY > introHeight / 2) {
      // Slide the main content up into view
      mainContent.style.transform = "translateY(0)";

      // Switch header background to white and text to black
      header.style.background = "#fff";
      header.style.color = "#000";

      // Make nav links black
      navLinks.forEach(link => link.style.color = "#000");
    }
  });
});
