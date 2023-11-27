// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
// Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число,
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function range(num1, num2) {
  let i = num1;
  let intervalId = setInterval(function () {
    console.log(i);
    if (i === num2) {
      clearInterval(intervalId);
    }
    i++;
  }, 1000);
}
range(5, 15);