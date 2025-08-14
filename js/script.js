const showMenu = document.querySelector(".fa-bars");
const Menu = document.querySelector(".menu-box");
const body = document.getElementById("body");
const ball = document.querySelectorAll(".ball");
showMenu.addEventListener("click", function (e) {
  if (Menu.style.left === "-300px" || Menu.style.left === "") {
    Menu.style.left = "5px";
  } else {
    Menu.style.left = "-300px";
  }
  e.stopPropagation();
});
window.addEventListener("click", function () {
  if (Menu.style.left === "5px") Menu.style.left = "-300px";
});
const cartInhomepage = document.querySelectorAll(".cart");
cartInhomepage.forEach(function (cart) {
  cart.addEventListener("click", function () {
    window.location.href = "cart.htm";
  });
});
