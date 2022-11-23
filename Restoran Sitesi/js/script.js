const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

const container = document.querySelector(".cart-items-container");
const shoopingBtn = document.querySelector("#shopping");

const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

shoopingBtn.addEventListener("click", function () {
  container.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(shoopingBtn) &&
      !e.composedPath().includes(container)
    ) {
      container.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navBar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navBar)
    ) {
      navBar.classList.remove("active");
    }
  });
});
