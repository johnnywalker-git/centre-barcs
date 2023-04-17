let menuButton  = document.querySelector("#menu-mobile")
let logoImage  = document.querySelector(".logo-img-mob")
let navList = document.querySelector(".nav-button-list")
let navContainer = document.querySelector(".nav-container")
let navContainerMobile = document.querySelector(".nav-container-mobile")
const form = document.getElementById('my-form')



function openMenu() {
  navContainer.style.display = "none"
  navContainerMobile.style.display = "flex"
  navContainerMobile.style.opacity = "1"

  console.log("Mobile viewing initiated.")
}

function closeMenu() {
    navContainer.style.display = "flex"
    navContainerMobile.style.display = "none"
    navContainerMobile.style.opacity = "0"
    console.log(" viewing initiated.")
  }

  
