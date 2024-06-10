// First task

// let myName = prompt('Введите Ваше имя');
// let birthDate = +prompt ('Введите Ваш год рождения');
// let currentYear = +prompt ('Введите текущий год');

// function data(myName,birthDate, currentYear) {
//     if (isNaN (birthDate) || isNaN (currentYear)) {
//         alert('ERROR')
//     }else {
//         let age = currentYear - birthDate;
//         return myName + ',' + ' ' + 'Ваш возраст' + ' ' + age
//     }
// }

// let result = data(myName, birthDate, currentYear)
// console.log(result);

// Second Task - пометка - сделано с помощью ии

// function generateRandomMathProblems(numProblems) {
//     let problems = [];
//     for (var i = 0; i < numProblems; i++) {
//         let num1 = Math.floor(Math.random() * 10) + 1; 
//         let num2 = Math.floor(Math.random() * 10) + 1; 
//         let operator = Math.random() < 0.5 ? '+' : '*'; 
//         let problem = num1 + ' ' + operator + ' ' + num2; 
//         problems.push(problem); 
//     }
//     return problems; 
// }

// function solveMathProblem(problem) {
//     return eval(problem); 
// }

// let numProblems = parseInt(prompt("Введите количество математических примеров:"));
// let mathProblems = generateRandomMathProblems(numProblems);

// mathProblems.forEach(function (problem) {
//     let userAnswer = parseInt(prompt("Решите пример: " + problem));
//     let correctAnswer = solveMathProblem(problem);
//     if (userAnswer === correctAnswer) {
//         alert("Ваш ответ верный - " + userAnswer);
//     } else {
//         alert("Ваш ответ не верный - " + userAnswer + ". Правильный ответ - " + correctAnswer + "!");
//     }
// });



