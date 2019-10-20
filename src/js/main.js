'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];


let expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector("#income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money,
    time;



startBtn.addEventListener('click', function() { //обработчик событий на клик кнопки начать расчет
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear(); //из того что ввели в time
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; //+1 т.к. месяцы тоже начинаются с 0
    dayValue.value = new Date(Date.parse(time)).getDate();
});
expensesBtn.addEventListener('click', function() { //Обработчик событий на клик кнопки Утвердить
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) { //чтоб считало столько значений, сколько будет столбцов расхода
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
    
        if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null 
            && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i-=1;
        }
        expensesValue.textContent = sum; //Статья обязательные расходы сумма вбитых значений
    }
    
});
optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExpQ = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optExpQ;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " "; 
    }
});
countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    switch (true) {
        case (appData.moneyPerDay < 300) :
           levelValue.textContent = "Минимальный уровень достатка";
            break;
        case (appData.moneyPerDay < 1001) :
            levelValue.textContent = "Средний уровень достатка";
            break;
        case (appData.moneyPerDay < 2999) :
            levelValue.textContent = "Высокий уровень достатка";
            break;
        case (appData.moneyPerDay >= 2999) :
            levelValue.textContent = "Очень высокий уровень достатка";
            break;
        default: 
            levelValue.textContent = "Произошла ошибка";
            break;
    }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});
incomeItem.addEventListener('input',function() { //Здесь событие input - когда мы что-то вводим в поле incomeItem
    let items = incomeItem.value;
    appData.income = items.split(", "); //Вписываем данные строкой, формируя массив с разделителем "," с помощью split
    incomeValue.textContent = appData.income; //чтоб данные сразу записывались в поле Дополнительный доход справа
});
checkSavings.addEventListener('click', function() {
    if (appData.savings == true) { //клик на кнопку Есть ли сохранения меняет значение savings на противоположное тому, что было
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
sumValue.addEventListener('input', function() { //расчитываем накопления за месяц и за год, при условии что должны быть заполнены графы и сумма и процент
    if (appData.savings == false) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (sum/100/12*percent).toFixed(2);
        appData.yearIncome = (sum/100*percent).toFixed(2);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    };
});
percentValue.addEventListener('input', function() {
    if (appData.savings == false) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (sum/100/12*percent).toFixed(2);
        appData.yearIncome = (sum/100*percent).toFixed(2);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    };
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


