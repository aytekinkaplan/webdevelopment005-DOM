// Select all elements with the class 'list' and get the third one (index 2)
var thirdListItem = document.querySelectorAll(".list")[2];
console.log(thirdListItem.textContent); // Outputs: Third

// Select all elements with the class 'list' and get the first one (index 0)
var firstListItem = document.querySelectorAll(".list")[0];
console.log(firstListItem.textContent); // Outputs: Second

// Select all elements with the class 'list' and get the second one (index 1)
var secondListItem = document.querySelectorAll(".list")[1];
console.log(secondListItem.textContent); // Outputs: Third

document.querySelectorAll(".list")[0].textContent = "Say my name";

document.firstElementChild.lastElementChild.querySelector(
  "ul"
).lastElementChild.textContent = "Say my name";
