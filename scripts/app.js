"use strict";
document.addEventListener("DOMContentLoaded", () => {

  let habbits = [];

  const HABBIT_KEY = "HABBIT_KEY";

  /* page */
  const page = {
    menu: document.querySelector(".menu__list"),
  };

  /* utils */

  function loadData() {
    const habbitsString = localStorage.getItem("HABBIT_KEY");
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
      habbits = habbitArray;
    }
  }

  function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
  }

  const renderMenu = () => {
    const menuList = document.querySelector(".menu__list");
    const habbitsList = habbits.map((item) => {
      return `<button href="#" class="menu__item" data-id="${item.id}">
            <img src='images/${item.icon}.svg' alt="">
        </button>`;
    });
     menuList.innerHTML = habbitsList.join("")
  }

  const setActiveButton = (activeButton) => {
    const buttons = document.querySelectorAll(".menu__item");
    buttons.forEach((item) => {
      item.classList.remove("menu__item--active");
    });
    activeButton.classList.add("menu__item--active");
  }


  // TODO: Сделать активными кнопки по клику
  const attachEventListeners = () => {
    page.menu.addEventListener("click", (event) => {
      const button = event.target.closest(".menu_item");
      if (button) {
        setActiveButton(button)
      }
    })
  }

  const init = () => {
    loadData();
    renderMenu();
    attachEventListeners()
  }


  /* init */
  (() => {
    init()
  })()
})