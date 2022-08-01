let menu = document.querySelector("header .container .menu");
let lis = document.querySelectorAll("header .container .list a");

let list = document.querySelector("header .container .list");

let formation = document.querySelector(".formation");
let formationBox = document.querySelectorAll(".formation .container .box");

let competences = document.querySelector(".competences");

let spans = document.querySelectorAll(
  ".competences .container .box .comp .progress span"
);

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

  if (window.scrollY >= competences.offsetTop - 300) {
    spans.forEach((elt) => {
      elt.style.width = elt.dataset.prog;
    });
  } else {
    spans.forEach((elt) => {
      elt.style.width = 0;
    });
  }
};
