// Escreva um programa que imprima os números de 1 a 25. Mas para múltiplos de três imprima "Fizz"
// em vez do número e para os múltiplos de cinco imprima "Buzz". Para números que são múltiplos de três e cinco, imprima "FizzBuzz"

// Ex saida:
// [
//     1,          2,      'Fizz',     3,      4,
//     'Buzz',     5,      'Fizz',     6,      7,
//     8,          'Fizz', 9,          'Buzz', 10,
//     11,         'Fizz', 12,         13,     14,
//     'FizzBuzz', 15,     16,         17,     'Fizz',
//     18,         19,     'Buzz',     20,     'Fizz',
//     21,         22,     23,         'Fizz', 24,
//     'Buzz',     25,     26,         'Fizz', 27,
//     28,         29,     'FizzBuzz', 30,     31,
//     32,         'Fizz', 33,         34,     'Buzz',
//     35,         'Fizz', 36,         37,     38,
//     'Fizz',     39,     'Buzz',     40,     41,
//     'Fizz',     42,     43,         44,     'FizzBuzz',
//     45,         46,     47,         'Fizz', 48,
//     49,         'Buzz', 50
//   ]

function fizzBuzz(number) {
  let result = []
  for (let iterator = 1; iterator <= number; iterator++) {
    if (iterator%3 === 0 && iterator%5 === 0) {
      result.push('FizzBuzz')
    } else if (iterator%5 === 0) {
      result.push('Buzz')
    } else if (iterator%3 === 0) {
      result.push("Fizz")
    }
    result.push(iterator)
  }
  return result
}

module.exports = fizzBuzz;
