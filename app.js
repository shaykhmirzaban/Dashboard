"use strict";

const country_list = document.querySelectorAll(
  ".country_list .list_item .item"
);
const hamburger_country_icon = document.querySelector(
  ".hamburger_country_icon"
);
const hamburger_nav_item = document.querySelector(".hamburger_nav_item");
const navbar = document.querySelector(".navbar");
const desktop_nav_item = document.querySelector(".desktop_nav_item");
const body = document.body;
const country = document.querySelector(".country");
const countriesModal = document.querySelector(".countries");
const closeIcon = document.querySelector(".closeIcon");

let isNavbarOpen = false;
let isCountriesListOpen = false;

country_list.forEach((element) => {
  element.addEventListener("click", (e) => {
    let iconChange = element.querySelector(".parent .right_side");
    let nested_list = element.querySelector(".nested_link");

    country_list.forEach((el) => {
      if (element !== el) {
        let nested = el.querySelector(".nested_link");
        let icon = el.querySelector(".parent .right_side");
        nested.classList.remove("show");
        icon.innerHTML = `<img src="./images/angle-right-solid.svg" alt="right arrow" />`;
      }
    });

    if (window.getComputedStyle(nested_list).display === "block") {
      iconChange.innerHTML = `<img src="./images/angle-right-solid.svg" alt="right arrow" />`;

      nested_list.classList.remove("show");
    } else {
      iconChange.innerHTML = `<img src="./images/angle-down-solid.svg" alt="down arrow" />`;

      nested_list.classList.add("show");
    }

    nested_list.addEventListener("click", (event) => event.stopPropagation());
  });
});

document.addEventListener("click", () => {
  if (isNavbarOpen) {
    navbarOpenAndClose();
  }

  if (isCountriesListOpen) {
    countrieslistOpenAndClose();
  }
});

document.addEventListener("keyup", (event) => {
  if (isNavbarOpen && event.key === "Escape") {
    navbarOpenAndClose();
  }

  if (isCountriesListOpen && event.key === "Escape") {
    countrieslistOpenAndClose();
  }
});

desktop_nav_item.addEventListener("click", (event) => {
  event.stopPropagation();
});
countriesModal.addEventListener("click", (event) => {
  event.stopPropagation();
});

hamburger_nav_item.addEventListener("click", navbarOpenAndClose);
hamburger_country_icon.addEventListener("click", countrieslistOpenAndClose);
closeIcon.addEventListener("click", countrieslistOpenAndClose);

function countrieslistOpenAndClose() {
  if (
    window.getComputedStyle(country).opacity == 0 &&
    window.getComputedStyle(country).visibility == "hidden"
  ) {
    country.style.opacity = 1;
    country.style.visibility = "visible";

    countriesModal.style.transform = "translateX(0)";

    // hamburger_country_icon.innerHTML = `<img src="./images/cross-icon.svg" alt="closs icon">`;

    body.style.overflow = "hidden";

    isCountriesListOpen = true;
  } else {
    country.style.opacity = 0;
    country.style.visibility = "hidden";

    countriesModal.style.transform = "translateX(-400px)";

    // hamburger_country_icon.innerHTML = `<img src="./images/hamburger.svg" alt="hamburger icon" />`;

    body.style.overflowY = "auto";

    isCountriesListOpen = false;

    country_list.forEach((el) => {
      let nested = el.querySelector(".nested_link");
      let icon = el.querySelector(".parent .right_side");
      nested.classList.remove("show");
      icon.innerHTML = `<img src="./images/angle-right-solid.svg" alt="right arrow" />`;
    });
  }
}

function navbarOpenAndClose() {
  if (
    window.getComputedStyle(navbar).opacity == 0 &&
    window.getComputedStyle(navbar).visibility == "hidden"
  ) {
    navbar.style.opacity = 1;
    navbar.style.visibility = "visible";

    body.style.overflow = "hidden";
    isNavbarOpen = true;
  } else {
    navbar.style.opacity = 0;
    navbar.style.visibility = "hidden";

    body.style.overflowY = "auto";
    isNavbarOpen = false;
  }
}
