let productList = [
  "Bột giặt",
  "Ba gọi bò",
  "Bàn chảy",
  "Bắp cải tím",
  "Bàn là",
  "Chuối",
  "Cá hồi đông lạnh",
  "Các loại hạt",
  "Cà rốt",
  "Củ cải",
  "Củ sắn",
  "Dụng cụ y tế",
  "Dụng cụ vệ sinh",
  "Đồ đóng hộp",
  "Đường cát",
  "Đường mía",
  "Gia vị muối kimchi",
  "Gia vị ướp xá xíu",
  "Khắn ướt PURI",
  "Khắn ướt UNIKU",
  "Kem đánh răng",
  "Mì hảo hảo",
  "Mì gấu đỏ",
  "Mì tương đen",
  "Nước xà phòng",
  "Nước súc miệng Listerine",
  "Nước tẩy rửa",
  "Sữa chua",
  "Sữa bắp",
  "Sữa chuối",
  "Sữa cô gái hà lan",
  "Phở bò",
  "Phở gà",
  "Phi lê cá hồi",
  "Trứng gà",
  "Trứng vịt",
  "Thịt heo",
  "Thịt bò",
  "Táo",
];

// search dropdown
function filterFunction() {
  let inputValue = document.getElementById("searchBox").value.toLowerCase();
  let searchList = document.getElementById("searchList");
  searchList.querySelectorAll("span").forEach(function (span) {
    span.remove();
  });
  if (inputValue === "") {
    return;
  }
  for (let i = 0; i < productList.length; i++) {
    let txtValue = productList[i];
    if (txtValue.toLowerCase().indexOf(inputValue) > -1) {
      let span = document.createElement("span");
      span.innerText = productList[i];
      span.style.display = "block";
      span.onclick = function (event) {
        document.getElementById("searchBox").value = span.innerText;
        event.stopPropagation();
      };
      searchList.appendChild(span);
    }
  }
}
document
  .getElementById("searchList")
  .addEventListener("mousedown", function (event) {
    event.preventDefault();
  });

document.getElementById("searchBox").addEventListener("blur", function (event) {
  let searchList = document.getElementById("searchList");
  if (event.relatedTarget && event.relatedTarget.nodeName === "SPAN") {
    return;
  }
  searchList.querySelectorAll("span").forEach(function (span) {
    span.remove();
  });
});

// xoa du lieu o search
document.getElementById("clearSearch").addEventListener("click", () => {
  let searchBox = document.getElementById("searchBox");
  searchBox.value = "";
});

// tim kiem
document
  .getElementById("search_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var searchValue = document.getElementById("searchBox").value.toLowerCase();
    var cards = document.querySelectorAll("[searchAble]");
    var cardsArray = Array.from(cards);
    var searchResults = [];

    cardsArray.forEach(function (card) {
      var cardContent = card.innerText.toLowerCase();
      if (cardContent.includes(searchValue)) {
        var cardClasses = Array.from(card.classList).join(" ");
        searchResults.push({
          html: card.outerHTML,
          classes: cardClasses,
        });
      }
    });
    sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
    window.location.href = "ResultSearch.html";
  });
