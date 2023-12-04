let iconCart = document.getElementById("cartImage");
let close = document.querySelector(".close");
let cart = document.querySelector(".cart");

cartImage.addEventListener("click", () => {
  if (cart.style.right == "-100%") {
    cart.style.right = "0";
  } else {
    cart.style.right = "-100%";
  }
});
close.addEventListener("click", function () {
  cart.style.right = "-100%";
});

let btn = document.querySelectorAll(".product-link button");
let listCart = document.querySelector(".listCart");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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
  itemImage.setAttribute("style", "width:60px");
  itemImage.setAttribute("src", productImage);

  let itemName = document.createElement("h5");
  itemName.innerText = productName;

  let itemPrice = document.createElement("span");
  itemPrice.innerText = productPrice;

  let itemQuantity = document.createElement("span");
  itemQuantity.innerText = "1";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Xóa";
  deleteButton.setAttribute("style", "background-color:#8ac1dd");
  deleteButton.addEventListener("click", function () {
    item.remove();
    // remove the item from cartItems array
    cartItems = cartItems.filter(function (item) {
      return item.productName !== productName;
    });
    // update localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });

  let btnAdd = document.createElement("button");
  let btnSub = document.createElement("button");
  btnAdd.innerText = "+";
  btnSub.innerText = "-";
  btnAdd.addEventListener("click", changeQuantity());
  btnSub.addEventListener("click", changeQuantity());

  item.appendChild(itemImage);
  item.appendChild(itemName);
  item.appendChild(itemPrice);
  item.appendChild(itemQuantity);
  item.appendChild(deleteButton);
  item.setAttribute("id", productName);

  listCart.appendChild(item);

  cartItems.push({
    productImage: productImage,
    productName: productName,
    productPrice: productPrice,
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
window.addEventListener("load", function () {
  cartItems.forEach(function (item) {
    addCart(item.productImage, item.productName, item.productPrice);
  });
});

function changeQuantity(productID, type) {
  switch (type) {
    case "+":
      listCart[productID].break;

    default:
      break;
  }
}
