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

// JavaScript to handle the "accept" button click
function acceptCookies() {
  // Hide the cookie pop-up
  document.getElementById("cookie-popup").style.display = "none";

  // Set a cookie to remember that the user has accepted the cookies
  document.cookie =
    "cookies-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// JavaScript to handle the "decline" button click
function declineCookies() {
  // Hide the cookie pop-up
  document.getElementById("cookie-popup").style.display = "none";

  // Set a cookie to remember that the user has declined the cookies
  document.cookie =
    "cookies-declined=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// Check if the user has already accepted or declined the cookies
if (
  document.cookie.indexOf("cookies-accepted=") == -1 &&
  document.cookie.indexOf("cookies-declined=") == -1
) {
  // Show the cookie pop-up
  document.getElementById("cookie-popup").style.display = "flex";
}
