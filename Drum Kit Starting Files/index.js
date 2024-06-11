let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  let sound;
  switch (key) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      sound = new Audio("sounds/snare.mp3");
      break;
    case "k":
      sound = new Audio("sounds/crash.mp3");
      break;
    case "l":
      sound = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(key); // Log key instead of buttonInnerHTML
      return; // Exit function if no valid key
  }
  if (sound) sound.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    // Check if activeButton exists
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
