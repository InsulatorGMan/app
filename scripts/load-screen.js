let screen = document.querySelector(".loading-screen");
let main = document.querySelector(".main");
function show() {
  screen.style.display = "none";
  main.style.display = "block";
}
function load() {
  main.stlye.display = "none";
  screen.style.display = "block";
  setTimeout(() => {  show() }, 5000);
}
