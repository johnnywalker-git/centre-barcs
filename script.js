let menuButton  = document.querySelector(".menu-mobile")
let logoImage  = document.querySelector(".logo-img")
let navList = document.querySelector(".nav-button-list")
let navContainer = document.querySelector(".nav-container")
let navContainerMobile = document.querySelector(".nav-container-mobile")


function openMenu() {
  navContainer.style.display = "none"
  navContainer.style.display = "flex"
  console.log("Mobile viewing initiated.")
}