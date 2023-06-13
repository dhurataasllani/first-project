const newBtn = document.getElementById("new-btn");
const newSection = document.getElementById("news-section");
const menuNewFeatured = document.querySelector(".menu-new-featured");

const menBtn = document.getElementById("men-btn");
const menSection = document.getElementById("men-section");
const menuMen = document.querySelector(".menu-men");
const imgEl = document.querySelector(".blurry");

const womenBtn = document.getElementById("women-btn");
const womenSection = document.getElementById("women-section");
const menuWomen = document.querySelector(".menu-women");

const kidsBtn = document.getElementById("kids-btn");
const kidsSection = document.getElementById("kids-section");
const menuKids = document.querySelector(".menu-kids");

function handleMenuEvents(menuElement, sectionElement, additionalActions = []) {
  menuElement.addEventListener("mouseenter", function (event) {
    event.preventDefault();
    sectionElement.classList.remove("display");

    additionalActions.forEach((action) => action.classList.add("overlay"));
    document.body.style.backdropFilter = "blur(5px)";
  });

  menuElement.addEventListener("mouseleave", function (event) {
    event.preventDefault();
    sectionElement.classList.add("display");
    additionalActions.forEach((action) => action.classList.remove("overlay"));
    document.body.style.backdropFilter = "none";
  });
}

const menuItems = [
  {
    menuElement: menuNewFeatured,
    sectionElement: newSection,
    additionalActions: [imgEl],
  },
  {
    menuElement: menuMen,
    sectionElement: menSection,
    additionalActions: [imgEl],
  },
  {
    menuElement: menuWomen,
    sectionElement: womenSection,
    additionalActions: [imgEl],
  },
  {
    menuElement: menuKids,
    sectionElement: kidsSection,
    additionalActions: [imgEl],
  },
];

menuItems.forEach(({ menuElement, sectionElement, additionalActions = [] }) => {
  handleMenuEvents(menuElement, sectionElement, additionalActions);
});
