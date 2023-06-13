const newBtn = document.getElementById("new-btn");
const newSection = document.getElementById("news-section");
const menuNewFeatured = document.querySelector(".menu-new-featured");

const menBtn = document.getElementById("men-btn");
const menSection = document.getElementById("men-section");
const menuMen = document.querySelector(".menu-men");
const imgEl = document.querySelector(".image-1");

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
/////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const prevIcons = document.querySelectorAll(".prev-icon");
  const nextIcons = document.querySelectorAll(".next-icon");
  const scrollWrappers = document.querySelectorAll(".popular-now-container");
  const itemWidth = scrollWrappers[0].querySelector(".popular-img").offsetWidth;

  function checkAvailability() {
    scrollWrappers.forEach((scrollWrapper, index) => {
      const scrollLeft = scrollWrapper.scrollLeft;
      const scrollWidth = scrollWrapper.scrollWidth;
      const containerWidth = scrollWrapper.offsetWidth;
      const prevIcon = prevIcons[index];
      const nextIcon = nextIcons[index];

      if (scrollLeft === 0) {
        prevIcon.classList.add("disabled");
        nextIcon.classList.remove("disabled");
      } else if (scrollLeft + containerWidth >= scrollWidth) {
        prevIcon.classList.remove("disabled");
        nextIcon.classList.add("disabled");
      } else {
        prevIcon.classList.remove("disabled");
        nextIcon.classList.remove("disabled");
      }
    });
  }

  // function scrollHandler() {
  //   checkAvailability();
  // }

  prevIcons.forEach((prevIcon, index) => {
    prevIcon.addEventListener("click", function () {
      scrollWrappers[index].scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });

      checkAvailability();
    });
  });

  nextIcons.forEach((nextIcon, index) => {
    nextIcon.addEventListener("click", function () {
      scrollWrappers[index].scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });

      checkAvailability();
    });
  });

  scrollWrappers.forEach((scrollWrapper) => {
    scrollWrapper.addEventListener("scroll", checkAvailability);
  });

  checkAvailability();
});
