const menu = document.getElementById("navbtn");
let check = 0;

document.querySelector(".select").addEventListener("click", function (evt) {
  if (evt.target.className == "select") {
    if (check === 0) {
      menu.classList.add("active");
      menu.style.display = "block";
      menu.classList.remove("navbuttons");
      check = 1;
    } else {
      menu.classList.remove("active");
      menu.style.display = "none";
      check = 0;
    }
  }
});
