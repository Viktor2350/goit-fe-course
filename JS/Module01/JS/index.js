'use strict'
//Задача 1
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;
// const enterPassword = prompt('Введите пароль: ');
// if (!enterPassword) {
//   message = 'Отменено пользователем!';
// } else if (enterPassword === 'm4ng0h4ckz') {
//   message ='Добро пожаловать!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);

// Задача 2!!!!

// const credits = 23580;
// const pricePerDroid = 3000;
// let message;
// let totalPrice;
// let result;
// let sum;
// let remainder;
// let quantityDroids = prompt('Сколько дроидов вы хотите приобрести? ');
// if (!quantityDroids) {
//   message = 'Отменено пользователем!';
// } else {
//   result = Number(quantityDroids)*pricePerDroid;
//   console.log(result);
// } if (result > credits) {
//   // sum = ;
//   message = 'Недостаточно средств на счету!';
// } if (result < credits) {
//   message = `Вы купили ${quantityDroids} дроидов, на счету осталось ${quantityDroids} кредитов.`;
// }

// console.log(message);

// Задача 3

// let userInupt = prompt ('Укажите страну в которую хотите оформить доставку: ');
// let message;
// let china = 'Китай';
// let southAmerica = 'Южная америка';
// let australia = 'Австралия';
// let india = 'Индия';
// let jamaica = 'Ямайка';
// let priceChina = '100';
// let priceSouthAmerica  = '250';
// let priceAustralia = '170';
// let priceIndia = '80';
// let priceJamaica = '120';

// if (!userInupt) {
//   console.log('Отменено пользователем!');
// } else {
//   userInupt = String(userInupt.toLocaleLowerCase());
//   switch (userInupt) {
//     case 'китай': 
//     console.log(`Доставка в ${china} будет стоить ${priceChina} кредитов`);
//     break;
//     case 'южная америка':
//     console.log(`Доставка в ${southAmerica} будет стоить ${priceSouthAmerica} кредитов`);
//     break;
//     case 'австралия':
//     console.log(`Доставка в ${australia} будет стоить ${priceAustralia} кредитов`);
//     break;
//     case 'индия':
//     console.log(`Доставка в ${india} будет стоить ${priceIndia} кредитов`);
//     break;
//     case 'ямайка':
//     console.log(`Доставка в ${jamaica} будет стоить ${priceJamaica} кредитов`);
//     break;
//     default:
//     console.log('В вашей стране доставка не доступна');
//   }
// }