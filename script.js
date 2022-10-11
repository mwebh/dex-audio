const menuButton = document.querySelector(".menu-label");
const navLinks = document.querySelector(".nav-list");
const barOne = document.querySelector(".bar1");
const barTwo = document.querySelector(".bar2");
const barThree = document.querySelector(".bar3");
const barFour = document.querySelector(".bar4");

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle("show-nav");
    barOne.classList.toggle("strum-bar1");
    barTwo.classList.toggle("strum-bar2");
    barThree.classList.toggle("strum.bar3");
    barFour.classList.toggle("strum-bar4");
})