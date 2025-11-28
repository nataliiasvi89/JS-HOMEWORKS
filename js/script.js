'use strict';

let age = prompt("Введіть ваш вік:");
age = Number(age.trim());
if (age <= 0 || age > 120 || isNaN(age) || age === " ") {
    alert("Некоректний вік");
} else alert("Через 5 років вам буде: " + (age + 5));

const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";

// If the first character is not a number, then it will be Nan
console.log(
    `${price1} -> parseInt: ${parseInt(price1)}, parseFloat: ${parseFloat(price1)}`
);
console.log(
    `${price2} -> parseInt: ${parseInt(price2)}, parseFloat: ${parseFloat(price2)}`
);
console.log(
    `${height} -> parseInt: ${parseInt(height)}, parseFloat: ${parseFloat(height)}`
);
console.log(
    `${broken} -> parseInt: ${parseInt(broken)}, parseFloat: ${parseFloat(broken)}`
);

