// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите любое число");
  numbers.push(parseFloat(input));
}
numbers.pop();
console.log(numbers);
for (const number of numbers) {
  if (numbers.length > 1) {
    total = total + number;
  }
}
console.log("Общая сумма чисел равна " + total);