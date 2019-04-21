'use strict';

//Задача 1


let input;
const numbers = [];
let total = 0;

do{
  input = prompt('Введите число: ');  
  input = Number(input);
  numbers.push(input);
} while (input !== 0);
numbers.pop(input);
console.log('Введены числа', numbers);

for ( let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];  
}

if (numbers.length >= 1){
  alert(`Общая сумма чисел равна ${total}`);
} 



// Задача 2



const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

do {

  let userPassword = prompt ('Введите пароль: ');
  if (userPassword === null) {
    break;
  }
    for(let password of passwords){
    if (userPassword === password) {
    alert('Добро пожаловать!');
    break;
    }
  }

  attemptsLeft -= 1;

  if (attemptsLeft > 0) { 
    alert (`Неверный пароль, у вас осталось ${attemptsLeft} попыток`)
  } else {
    alert ('У вас закончились попытки, аккаунт заблокирован!');
  }

} while (attemptsLeft > 0);

