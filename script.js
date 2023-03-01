let menuButton  = document.querySelector("#menu-mobile")
let logoImage  = document.querySelector(".logo-img-mob")
let navList = document.querySelector(".nav-button-list")
let navContainer = document.querySelector(".nav-container")
let navContainerMobile = document.querySelector(".nav-container-mobile")



function openMenu() {
  navContainer.style.display = "none"
  navContainerMobile.style.display = "flex"

  console.log("Mobile viewing initiated.")
}

function closeMenu() {
    navContainer.style.display = "flex"
    navContainerMobile.style.display = "none"
      
    console.log(" viewing initiated.")
  }