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

function searchProduct() {
  let valueSearch = document.getElementById("searchBox").value;
  for (let i = 0; i < productList.length; i++) {
    let productSearch = productList.filter((value) => {
      return value.prod_name.toLowerCase().includes(valueSearch);
    });
    if (productSearch.length > 0) {
      let searhList = document.getElementById("searchList");

      for (let i = 0; i < productSearch.length; i++) {
        let div = document.createElement("div");
        let productDiv = document.createElement("div");
        productDiv.innerHTML = productSearch[i].prod_name;
        div.appendChild(productDiv);

        listDiv.appendChild(div);
      }
    }
  }
}
