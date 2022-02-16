"use strict";
const equipementImages = $(".item-equipement");
const modale = $(".equipements-modale-container");
const imageModale = $(".equipements-modale-bloc");
if (window.matchMedia("(min-width: 1000px)").matches) {
  equipementImages.on("click", (e) => {
    imageModale.attr(
      "src",
      `./ressources/img${e.target.dataset.equipement}-equip.jpg`
    );
    modale.toggleClass("activeModale");
  });
  modale.on("click", () => {
    modale.toggleClass("activeModale");
  });
}
const navbar = $(".navbar");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.addClass("navbar-anim-color");
//   } else navbar.removeClass("navbar-anim-color");
//   console.log("touhed");
// });
// console.log(window.scrollY);
$(window).on("scroll", () => {
  if (window.scrollY > 0) {
    navbar.addClass("navbar-anim-color");
  } else navbar.removeClass("navbar-anim-color");
});
