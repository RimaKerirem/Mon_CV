let menu = document.querySelector("header .container .menu");
let lis = document.querySelectorAll("header .container .list a");

let list = document.querySelector("header .container .list");

let formation = document.querySelector(".formation");
let formationBox = document.querySelectorAll(".formation .container .box");

menu.addEventListener("click", () => list.classList.toggle("active"));

lis.forEach((li) => {
  li.addEventListener("click", () => list.classList.remove("active"));
});

window.onscroll = function () {
  if (window.scrollY >= formation.offsetTop - 300) {
    formationBox.forEach((box) => {
      box.classList.add("show");
    });
  } else {
    formationBox.forEach((box) => {
      box.classList.remove("show");
    });
  }
};
