let iconCart = document.getElementById("cartImage");
let close = document.querySelector(".close");
let cart = document.querySelector(".cart");

cartImage.addEventListener("click", () => {
  if (cart.style.right == "-100%") {
    cart.style.right = "0";
    // container.style.transform = "translateX(-200px)";
  } else {
    cart.style.right = "-100%";
  }
});
close.addEventListener("click", function () {
  cart.style.right = "-100%";
  container.style.transform = "translateX(0)";
});
//use cookie so the cart doesn't get lost on refresh page

// let listCart = [];
// function checkCart() {
//   var cookieValue = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("listCart="));
//   if (cookieValue) {
//     listCart = JSON.parse(cookieValue.split("=")[1]);
//   } else {
//     listCart = [];
//   }
// }

let btn = document.querySelectorAll(".product-link button");
let listCart = document.querySelector(".listCart");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    var btnItem = event.target; // nút nhấn
    var product = btnItem.parentElement.parentElement; // lấy thẻ bao ngoài nút nhấn
    // lấy nội dung thẻ gồm link ảnh, tên và giá
    let productImage = product.querySelector("img").src;
    let productName = product.querySelector("h5").innerText;
    let productPrice = product.querySelector("span").innerText;
    addCart(productImage, productName, productPrice);
  });
});

function addCart(productImage, productName, productPrice) {
  // tạo item trong giỏ hàng
  var item = document.createElement("div");
  item.setAttribute("class", "item");
  let itemImage = document.createElement("img");
  // itemName, itemPrice;
  itemImage.innerHTML = `<img style="width:50px" src="${productImage}"></img>`;
  listCart.appendChild(itemImage);
}
