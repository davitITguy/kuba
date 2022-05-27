const mean = document.querySelector("#mean");
const median = document.querySelector("#median");

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

  console.log(sum / objectLength);
});

const computeMedian = (arr) => {
  let middle = Math.floor(arr.length / 2);
  arr = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
};

median.addEventListener("click", () => {
  const sortedData = Object.values(data);

  console.log(computeMedian(sortedData));
});
