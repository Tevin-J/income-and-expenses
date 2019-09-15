"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) { //чтоб ответ на этот вопрос был обязателен
        money = +prompt("Ваш бюджет на месяц", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optExpences: {},
    income: [],
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {

        let expencesName = prompt("Введите обязательную статью расходов в этом месяце"),
            expencesValue = prompt("Во сколько это обойдется");

        if ( (typeof(expencesName) !== null) && (typeof(expencesValue) !== null) 
        && expencesName !== "" && expencesValue !== ""
        && (expencesName.length < 50) ){
        console.log("Готово");
        appData.expences[expencesName] = expencesValue;
        }   else {
        i--;
        }
}
}

chooseExpences(); //Вызываем функцию

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); //Округление результата до целого
    alert("Ежедневный бюджет :" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
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
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++){
        let optExpensesQuestion = prompt("Введите статью необязательных расходов");
        appData.optExpences[i] = optExpensesQuestion;
    }
    console.log(appData.optExpences);

}

chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();