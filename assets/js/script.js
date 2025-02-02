'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var icon = this.querySelector("i");
    var pannel = this.nextElementSibling;

    if (pannel.style.maxHeight) {
      pannel.style.maxHeight = null;
      pannel.style.padding = "0 2rem";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      pannel.style.maxHeight = pannel.scrollHeight + "px";
      pannel.style.padding = "0 2rem 2.5rem 2rem";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
}




// script.js

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the button that closes the modal
const closeModalBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block"; // Show the modal
    setTimeout(() => {
        modal.classList.add("open"); // Add the 'open' class for animation
    }, 10); // Small delay to trigger the transition
}

// When the user clicks on the close button, close the modal
closeModalBtn.onclick = function() {
    modal.classList.remove("open"); // Remove the 'open' class for animation
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal after the transition
    }, 300); // Match the duration of the CSS transition
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("open"); // Remove the 'open' class for animation
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after the transition
        }, 300); // Match the duration of the CSS transition
    }
}
