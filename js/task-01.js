// console.log(arrayWithNumbers);

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const result = `${i + 1}-${array[i]}`;
    console.log(result);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
