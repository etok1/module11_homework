//1 task
// В прошлом модуле в юните «Циклы» вы выполняли следующее задание:

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.

// На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

// Удачи!

function numbers(arrNumbers) {
  let evenNumbers = 0;
  let oddNumber = 0;
  const numbers = arrNumbers.filter((element) => typeof element === "number");
  const zeroNum = arrNumbers.filter((element) => element === 0).length;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers++;
    } else {
      oddNumber++;
    }
  }
  console.log(zeroNum);
  console.log(evenNumbers);
  console.log(oddNumber);
}

numbers([1, 2, 3, 4, 5, 6, 7, null, true]);
