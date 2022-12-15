var coll = document.getElementsByClassName("collapsible");
var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
const menuBtn = document.querySelector(".menu-icon img");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "rgb(127, 126, 126)";
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// cookie

function acceptCookies() {
  // Handle accept action
  // For example, you could set a cookie to remember that the user has accepted the use of cookies
  closeCookiePopup();
}

function declineCookies() {
  // Handle decline action
  // For example, you could redirect the user to a page with more information about your use of cookies
  closeCookiePopup();
}

function closeCookiePopup() {
  // Find the cookie pop-up element
  const cookiePopup = document.getElementById("cookie-popup");
  // Hide the element by setting its display style to "none"
  cookiePopup.style.display = "none";
}
