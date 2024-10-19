"use strict";

function filterArray(numbers, value) {
    // Створюємо порожній масив для зберігання підходящих чисел
    const filteredNumbers = [];

    // Ітеруємо кожен елемент масиву numbers
    for (let number of numbers) {
        // Якщо елемент більший за значення value, додаємо його до масиву
        if (number > value) {
            filteredNumbers.push(number);
        }
    }

    // Повертаємо масив із підходящими числами
    return filteredNumbers;
}

// Перевірка результатів
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
