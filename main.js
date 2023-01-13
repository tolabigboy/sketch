console.log("Hello there");
const menuBar = document.querySelector(".menu-borders");
const asideNavBox = document.querySelector(".aside-nav-box");
const mobiHeader = document.querySelector(".mobi-header");
const closeMenu = document.querySelector(".close-menu");
const overLay = document.querySelector(".overlay");
const body = document.querySelector("body");
const subHeader = document.querySelector(".sub-header");
// opening toggle bar-----------------
menuBar.addEventListener("click", () => {
  asideNavBox.classList.toggle("active");
  overLay.classList.toggle("active");
  // overLay.classList.toggle("left");
  mobiHeader.classList.toggle("active");
  asideNavBox.classList.toggle("left");
  body.style.overflowY = "hidden";
  subHeader.classList.add("backg-color");
});
// closing toggle bar--------------------
closeMenu.addEventListener("click", () => {
  asideNavBox.classList.toggle("active");
  overLay.classList.toggle("active");
  // overLay.classList.toggle("left");
  mobiHeader.classList.toggle("active");
  asideNavBox.classList.toggle("left");
  body.style.overflowY = "scroll";
  subHeader.classList.remove("backg-color");
});
