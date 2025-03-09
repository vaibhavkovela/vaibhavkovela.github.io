// Typing Effect
var typed = new Typed("#typing-text", {
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

// Scroll Reveal Animation
window.addEventListener("scroll", function () {
    let mainContent = document.getElementById("main-content");
    let introHeight = document.getElementById("intro").offsetHeight;
    if (window.scrollY > introHeight / 2) {
        mainContent.style.transform = "translateY(0)";
        document.querySelector("header").style.background = "#fff";
        document.querySelector("header").style.color = "#000";
    }
});
