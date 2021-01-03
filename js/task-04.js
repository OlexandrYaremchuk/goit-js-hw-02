// // // Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// // // Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// // // Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет
// // в конец строки троеточие '...', после чего возвращает укороченную версию.
const formatString = function (string) {
  const arrayStrings = string.split("");

  const stringLenght = 40;

  for (const arrayString of arrayStrings) {
    if (arrayStrings.length > stringLenght) {
      const dell = arrayStrings.slice(0, 40);
      const modernSring = dell.join("");
      return `${modernSring} ...`;
    }
    return string;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
