"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

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
    savings: true,
    chooseExpences: function () { //Метод объекта это функция
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); //Округление результата до целого
        alert("Ежедневный бюджет :" + appData.moneyPerDay);
    },
    detectLevel: function () {
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
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++){
            let optExpensesQuestion = prompt("Введите статью необязательных расходов");
                appData.optExpences[i] = optExpensesQuestion;
        }
        console.log(appData.optExpences);
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let item = prompt("Напишите статьи дополнительного дохода через запятую.", "");
        if  (typeof(item) != "string" || item == "" || typeof(item) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе.");
        } else {
            appData.income = item.split(", "); //Строку из prompt сделать массивом
            appData.income.push(prompt("Может что-то еще?", "")); //Добавить новый объект в массив
            appData.income.sort(); //Сортировка по алфавиту
        }
        appData.income.forEach ( function (itemMassive, i) {
            alert ("Способы доп заработка: " + (i+1) + " - " + itemMassive);
        });
    }
};    

for (let key in appData) {
    console.log ("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}





