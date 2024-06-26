console.log(document.querySelector("li").classList);

console.log(document.querySelector("li").classList.toString());

document.querySelector("h1").textContent = "Goodbye World!";

document.querySelector("h1").style.color = "green";

document.querySelector("h1").style.fontSize = "5rem";

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

document.querySelector("button").addEventListener("click", () => {
  const h1Elements = document.querySelectorAll("h1");

  h1Elements.forEach((h1, index) => {
    h1.style.color = colors[index % colors.length];
  });
});

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").classList.toggle("big").fontSize = "5rem";
  document.querySelector("h1").classList.toggle("small").fontSize = "2rem";
  document.querySelector("h1").classList.toggle("medium").fontSize = "3rem";
});
