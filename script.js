const mean = document.querySelector("#asd");

let data = {};

fetch("./file.json")
  .then((res) => res.json())
  .then((result) => (data = result))
  .catch((err) => console.log(err));

mean.addEventListener("click", () => {
  let objectLength = 0;
  let sum = 0;

  for (const property in data) {
    objectLength++;
    sum += data[property];
  }

  console.log(`mean = ${sum / objectLength}`);
});
