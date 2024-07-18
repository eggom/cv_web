/*==================== PORTFOLIO SELECTION ====================*/
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio__column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    portfolioRemoveClass(x[i], "portfolio__show");
    if (x[i].className.indexOf(c) > -1) portfolioAddClass(x[i], "portfolio__show");
  }
}

// Show filtered elements
function portfolioAddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
    }
}
}
  
// Hide elements that are not selected
function portfolioRemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}
  
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("portfolio__btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("portfolio__active");
    current[0].className = current[0].className.replace(" portfolio__active", "");
    this.className += " portfolio__active";
});
}