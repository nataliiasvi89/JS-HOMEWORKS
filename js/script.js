"use strict";

const name = prompt("Ім'я");
const age = prompt("Вік");
const residence = prompt("Місто проживання");
const loveJavaScript = prompt("Чи любите Ви JavaScript?");

if (loveJavaScript === null) {
    alert(`Привіт, ${name}! Вам ${age} років, Ви з міста ${residence}. Ставлення до JavaScript: не любить.`);
}
const jsAnswer = loveJavaScript.toLowerCase();

if (jsAnswer === "так") {
    alert(`Привіт, ${name}! Вам ${age} років, Ви з міста ${residence}. Ставлення до JavaScript: любить.`);
} else {
    alert(`Привіт, ${name}! Вам ${age} років, Ви з міста ${residence}. Ставлення до JavaScript: не любить.`)
}