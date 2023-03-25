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

  window.addEventListener("load", function() {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thank you for getting in touch. We aim to be in cotact within 24 hours!");
        form.reset();
      })
    });
    form.reset()
  });

  