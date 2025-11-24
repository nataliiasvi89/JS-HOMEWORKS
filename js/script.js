"use strict";
prompt("Вік");
const price = prompt("Початкова ціна товару");
const discount = prompt("Розмір знижки у відсотках (наприклад, 10, 15, 20)");
if (Number(discount) > 0
    && Number(discount) !== NaN
    && Number(price) > 0
    && Number(price) !== NaN) {
    const result = Number(price) - (Number(price) * Number(discount) / 100);
    alert(`Початкова ціна: ${price} грн, знижка: ${discount}%. Ціна зі знижкою: ${result} грн.`)
} else alert("Помилка вводу");