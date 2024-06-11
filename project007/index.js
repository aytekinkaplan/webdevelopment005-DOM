let a = document.querySelector("a");
console.log(a);
console.log(a.textContent);
let b = a.attributes;
console.log(b);
console.log(b.length);

let c = a.getAttribute("href");
console.log(c);

a.setAttribute("href", "https://www.clarusway.com");
console.log(a.getAttribute("href"));

a.setAttribute("target", "_blank");
console.log(a.getAttribute("target"));

a.removeAttribute("target");
console.log(a.getAttribute("target"));

a.setAttribute("target", "_blank");
console.log(a.getAttribute("target"));

a.setAttribute("href", "https://www.clarusway.com");
console.log(a.getAttribute("href"));
