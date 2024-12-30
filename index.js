const bar = document.querySelector("#bar");
const navBar = document.querySelector(".navBar");
const close = document.querySelector(".close");

if (bar) {
  bar.addEventListener("click", () => {
    navBar.classList.add("active");
    bar.style.display = "none";
  });
}
if (close) {
  close.addEventListener("click", () => {
    navBar.classList.remove("active");
    bar.style.display = "block";
  });
}
