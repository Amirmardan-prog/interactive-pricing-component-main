var n_input_range = document.getElementsByClassName("myInput").length
var discount_apply = 1

for (var i = 0; i < n_input_range; i++) {
  document.getElementsByClassName("myInput")[i].oninput = function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 80%)'

    let inputValue = this.value

    pageView(inputValue);
  };
}

document.querySelector(".switch").addEventListener("click", function() {

  if (document.getElementById("yealy_discount").checked === true) {
    discount_apply = 0.75
  } else if (document.getElementById("yealy_discount").checked === false) {
    discount_apply = 1.0
  }

  let inputValue
  let inputValue_mobile = document.getElementsByClassName("myInput")[0].value
  let inputValue_screen = document.getElementsByClassName("myInput")[1].value

  if (inputValue_mobile === inputValue_screen){
    inputValue = inputValue_screen

  } else{
    if (inputValue_screen !== "2"){
      inputValue = inputValue_screen
    }else {
      inputValue = inputValue_mobile
    }
  }
  console.log(inputValue)
  pageView(inputValue);


})

function pageView(inputValue) {
  console.log(typeof(discount_apply * 2))
  console.log(discount_apply * 2)

  if (inputValue === "0") {
    document.querySelector(".cost h1").innerHTML = "$" + (discount_apply * 8.00).toFixed(2)
    document.querySelector(".pageviews_number").innerHTML = "10k "
  } else if (inputValue === "1") {
    document.querySelector(".cost h1").innerHTML = "$" + (discount_apply * 12.00).toFixed(2)
    document.querySelector(".pageviews_number").innerHTML = "50k "
  } else if (inputValue == "2") {
    document.querySelector(".cost h1").innerHTML = "$" + (discount_apply * 16.00).toFixed(2)
    document.querySelector(".pageviews_number").innerHTML = "100k "
  } else if (inputValue == "3") {
    document.querySelector(".cost h1").innerHTML = "$" + (discount_apply * 24.00).toFixed(2)
    document.querySelector(".pageviews_number").innerHTML = "500k "
  } else if (inputValue === "4") {
    document.querySelector(".cost h1").innerHTML = "$" + (discount_apply * 36.00).toFixed(2)
    document.querySelector(".pageviews_number").innerHTML = "1M "
  }
}
