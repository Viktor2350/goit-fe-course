'use strict';

//Задача 1

let input;
const numbers = [];
let total = 0;

while (true){
  input = prompt('Введите число: ');
  if(input === null) {
    break;
  }
  input = Number(input);
  if(Number.isNaN(input)) {
    alert('Было введено не число, попробуйте ещё раз!');
  } else {
    numbers.push(input);    
  }
}

  if (numbers.length){
    for (const element of numbers ) {
    total += element;  
  }
  console.log(`Общая сумма чисел равна ${total}`);
}



// Задача 2



const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

do {

  let userPassword = prompt ('Введите пароль: ');
  if (userPassword === null) {
    break;
  }
    if (passwords.includes(userPassword)) {
    alert('Добро пожаловать!');
    break;
    }
  attemptsLeft -= 1;

  if (attemptsLeft) { 
    alert (`Неверный пароль, у вас осталось ${attemptsLeft} попыток`)
  } else {
    alert ('У вас закончились попытки, аккаунт заблокирован!');
  }

} while (attemptsLeft);

