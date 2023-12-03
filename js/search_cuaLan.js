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

//dung để gợi ý tìm kiếm
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suga.filter((data) => {
      //fillter array value and user char to lowercase and return only those
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    //console.log(emptyArray);
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData; //passing the user selected list item data in textfild
  searchWrapper.classList.remove("active"); //hide autocomplete box
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
/*
function mySearch(e) {
    var key = event.which || event.keyCode;
    var input = document.querySelector('#myInput');
    if (key == 32 && input != ''){
      doSearch();
    }
  }*/
