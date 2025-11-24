"use strict";

const userName = prompt("Enter your name:");
const Greeting = confirm("Want greeting?");
if (Greeting) {
    alert(`Hello, ${userName}! How are you?`);
}