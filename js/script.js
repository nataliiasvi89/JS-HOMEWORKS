'use strict';

const user = {
    name: "Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};

// Створіть окремі змінні name, age, city, job через деструктуризацію.
const {name, age, city, job} = user;

// Створіть новий об’єкт shortInfo, який містить лише name і city.
const shortInfo = {'name': name, 'city': city};
console.log(shortInfo);

// Створіть новий об’єкт renamed, у якому ключі будуть перейменовані
const renamed = {fullName: name, location: city};
console.log(renamed);

const a = [1, 2, 3];
const b = [4, 5];

// Сформуйте масив c без методів і без циклів, який виглядає так: Copy code[1, 2, 3, 4, 5]
const c = [a[0], a[1], a[2], b[0], b[1]];
console.log(c);

const people = [
    {name: "Anna", age: 22},
    {name: "Oleg", age: 31},
    {name: "Maria", age: 27}
];

// Створіть змінну firstPersonName → ім'я першої людини.
const firstPersonName = people[0].name;
console.log(firstPersonName);

// Створіть змінну oldest, у яку запишіть об’єкт найстаршої людини (порівняйте people[0].age, people[1].age, people[2].age).
let oldest = null;

if ((people[0].age > people[1].age) || (people[0].name > people[2].name)) {
    oldest = people[0].age;
}

if ((people[1].age > people[0].age) || (people[1].name > people[2].name)) {
    oldest = people[1].age;
}

if ((people[2].age > people[0].age) || (people[2].name > people[1].name)) {
    oldest = people[2].age;
}

console.log(oldest);

const ageSummary = {
    total: people[0].age + people[1].age + people[2].age, average: ['same sum'] / 3
}

const cart = [{title: "Book", price: 200, qty: 2},
    {title: "Laptop", price: 30000, qty: 1}
];

const totalPrice = cart[0].price * cart[0].qty + cart[1].price * cart[1].qty;
console.log(totalPrice);

// Додайте третій товар у новий масив updatedCart (тільки вручну), наприклад { title: "Pen", price: 20, qty: 5 }
const updatedCart = {title: "Pen", price: 20, qty: 5};
updatedCart.total = 9;
console.log(updatedCart);

const itemNames = cart[0].title + ", " + cart[1].title + ", " + updatedCart.title;
console.log(itemNames);
