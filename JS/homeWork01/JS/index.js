'use strict'

//Задача 1

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
const enterPassword = prompt('Введите пароль: ');
if (enterPassword === null) {
  message = 'Отменено пользователем!';
} else if (enterPassword === 'm4ng0h4ckz') {
  message ='Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

//Задача 2

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const quantityDroids = prompt('Сколько дроидов вы хотите приобрести? ');
if (quantityDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = quantityDroids*pricePerDroid;
  console.log(totalPrice);
} if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} if (totalPrice < credits) {
  totalPrice = credits - totalPrice;
  console.log(`Вы купили ${quantityDroids} дроидов, на счету осталось ${totalPrice} кредитов.`);
}

//Задача 3

let userInupt = prompt ('Укажите страну в которую хотите оформить доставку: ');
userInupt = userInupt.toLowerCase();
let priceChina = 100;
let priceSouthAmerica  = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaica = 120;

if (userInupt === null) {
  console.log('Отменено пользователем!');
} else {
  switch (userInupt) {
    case 'китай': 
    console.log(`Доставка в ${userInupt} будет стоить ${priceChina} кредитов`);
    break;
    case 'южная америка':
    console.log(`Доставка в ${userInupt} будет стоить ${priceSouthAmerica} кредитов`);
    break;
    case 'австралия':
    console.log(`Доставка в ${userInupt} будет стоить ${priceAustralia} кредитов`);
    break;
    case 'индия':
    console.log(`Доставка в ${userInupt} будет стоить ${priceIndia} кредитов`);
    break;
    case 'ямайка':
    console.log(`Доставка в ${userInupt} будет стоить ${priceJamaica} кредитов`);
    break;
    default:
    console.log('В вашей стране доставка не доступна');
  }
}