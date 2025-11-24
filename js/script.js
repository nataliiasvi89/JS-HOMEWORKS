"use strict";

const age = prompt("Вік");


if (age === null) {
    alert("Вік не вказано");
} else if (Number(age) < 18) {
    const access = confirm("Вам менше 18. Чи є з вами дорослий, який дозволяє перегляд?");
    if (access === true) {
        alert("Доступ дозволено з дозволу дорослого.");
    } else alert("Доступ заборонено.");
} else {
    alert("Доступ дозволено. Приємного перегляду!");
}