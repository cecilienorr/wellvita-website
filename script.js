function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// CHANGING COLOR form

// $("input[type=text]").change(function () {
//   var filled = true;
//   $("input[type=text]").each(function (index) {
//     if ($(this).val() == "") {
//       filled = false;
//     }
//     if (filled === false) {
//       //change color
//     }
//   });
// });
