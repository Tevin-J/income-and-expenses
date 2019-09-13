"use strict";

let money = +prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {

    let expencesName = prompt("Введите обязательную статью расходов в этом месяце"),
        expencesValue = prompt("Во сколько это обойдется");

    if ( (typeof(expencesName) !== null) && (typeof(expencesValue) !== null) 
        && expencesName !== "" && expencesValue !== ""
        && (expencesName.length < 50) ){
        console.log("Готово");
        appData.expences[expencesName] = expencesValue;
    }   else {
        i=0;
}
};

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет :" + appData.moneyPerDay);
console.log(appData);

switch (true) {
    case (appData.moneyPerDay < 500): 
        console.log("Минимальный уровень дохода");
        break;
    case (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000):
        console.log("Средний уровень дохода");
        break;
    case (appData.moneyPerDay > 2000):
        console.log("Высокий уровень дохода");
        break;
    default:
        console.log("Произошла ошибка!");
        break;
}