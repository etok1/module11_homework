// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.

const numbers = (x, n) => {
  if (typeof x === "number" && typeof n === "number") {
    if (x <= 0 || n <= 0) {
      console.log("it is not a natural number");
    } else if (isNaN(x) || isNaN(n)) {
      console.log("it`s NaN");
    } else {
      console.log(x ** n);
    }
  } else {
    console.log("it is not a number");
  }
};
numbers(2, 2);
