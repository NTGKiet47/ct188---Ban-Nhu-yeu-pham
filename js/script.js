let productList = [
  {
    prod_name: "ba roi bo",
    price: "120",
  },
  {
    prod_name: "phi le ca hoi",
    price: "69",
  },
  {
    prod_name: "trung ga",
    price: "10",
  },
  {
    prod_name: "gia vi muoi",
    price: "5.6",
  },
  {
    prod_name: "khan uot puri",
    price: "46",
  },
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
    let txtValue = productList[i].prod_name;
    if (txtValue.toLowerCase().indexOf(inputValue) > -1) {
      let span = document.createElement("span");
      span.innerText = productList[i].prod_name;
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

// tim san pham
document
  .getElementById("searchButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var searchValue = document.getElementById("searchBox").value.toLowerCase();
    var cards = document.getElementsByClassName("[product-link]");
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

// tra ve ket qua tim kiem
document.addEventListener("DOMContentLoaded", function () {
  var storedResults = sessionStorage.getItem("searchResults");
  var searchResults = JSON.parse(storedResults);

  var searchResultsContainer = document.getElementById(
    "searchResultsContainer"
  );
  var classList = document.getElementById("classList");

  if (searchResults && searchResults.length > 0) {
    searchResults.forEach(function (result) {
      var cardDiv = document.createElement("div");
      cardDiv.innerHTML = result.html;

      var cardElement = cardDiv.firstChild;
      cardElement.classList.add(...result.classes.split(" "));
      searchResultsContainer.appendChild(cardElement);
    });
  } else {
    var noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "Không tìm thấy sản phẩm.";
    noResultsMessage.style.fontSize = "25px";
    noResultsMessage.classList.add("text-center");
    searchResultsContainer.appendChild(noResultsMessage);
  }
});

// chua load duoc san pham o trang tim kiem
