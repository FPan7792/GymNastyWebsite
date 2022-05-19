// import $ from "jquery";

const equipementImages = $(".item-equipement") as JQuery;
const modale = $(".equipements-modale-container") as JQuery;
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

const navbar = $(".navbar") as JQuery;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.addClass("navbar-anim-color");
//   } else navbar.removeClass("navbar-anim-color");

//   console.log("touhed");
// });
// console.log(window.scrollY);

// $(window).on("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.addClass("navbar-anim-color");
//   } else navbar.removeClass("navbar-anim-color");
// });

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.addClass("navbar-anim-color");
  } else navbar.removeClass("navbar-anim-color");
});
