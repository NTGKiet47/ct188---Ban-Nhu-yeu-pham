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
