let a = document.querySelector("a");
console.log(a);
console.log(a.textContent);

let b = (a.textContent = "Hello World");
console.log(b);

let c = document.querySelector("h1");
console.log(c);
console.log(c.textContent);
c.textContent = "Hello World";
console.log(c.textContent);
