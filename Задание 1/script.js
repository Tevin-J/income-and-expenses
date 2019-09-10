"use strict";

let money = prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

let expencesName1 = prompt("Введите обязательную статью расходов в этом месяце",
 "");
let expencesValue1 = prompt("Во сколько Вам это обойдется?","");
let expencesName2 = prompt("Введите обязательную статью расходов в этом месяце",
 "");
let expencesValue2 = prompt("Во сколько Вам это обойдется?","");

appData.expences[expencesName1] = expencesValue1;
appData.expences[expencesName2] = expencesValue2;

alert(appData.budget/30);

console.log(appData);

