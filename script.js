let menuBtn = document.querySelector(".btn-toggle-nav");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px";

function menuToggle() {
  if (menuStatus == false) {
    menu.style.marginLeft = "0px";
    menuStatus = true;
  } else if (menuStatus == true) {
    menu.style.marginLeft = "-300px";
    menuStatus = false;
  }
}

menuBtn.onclick = ("click", menuToggle);

const homeClickBtn = document.getElementById("homeBtn");
const yellowClickBtn = document.getElementById("yellowBtn");
const orangeClickBtn = document.getElementById("orangeBtn");
const redClickBtn = document.getElementById("redBtn");
const blueClickBtn = document.getElementById("blueBtn");

homeClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#f1f1f1";
  menuToggle();
});

yellowClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#edfaa8";
  menuToggle();
});

orangeClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#f4bf0e";
  menuToggle();
});

redClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#c51c0d";
  menuToggle();
});

blueClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#1c66e6";
  menuToggle();
});
