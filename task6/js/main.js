let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalExpensesItem = document.querySelectorAll('input.optionalexpenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    incomeItem = document.querySelector('input.choose-income'),
    checkSavings = document.querySelector('input#savings'),
    sumValue = document.querySelector('input.choose-sum'),
    percentValue = document.querySelector('input.choose-percent'),
    yearValue = document.querySelector('input.year-value'),
    monthValue = document.querySelector('input.month-value'),
    dayValue = document.querySelector('input.day-value'),
    money, time;

    expensesBtn.setAttribute('disabled','true');
    optionalExpensesBtn.setAttribute('disabled','true');
    countBtn.setAttribute('disabled','true');

startBtn.addEventListener('click', function() {
    money = +prompt('Ваш бюджет в месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    expensesBtn.removeAttribute('disabled');
    optionalExpensesBtn.removeAttribute('disabled');
    countBtn.removeAttribute('disabled');
    while (isNaN(money) || money == '' || money == null) {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expensesItem[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - parseInt(expensesValue.textContent)) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = 'Средний уровень зарплаты';
        } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = 'Высокий уровень зарплаты';
        } else {
        levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});
incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
});
checkSavings.addEventListener('click', function() {
    if (appData.checkSavings == true) {
        appData.checkSavings = false
    } else {
        appData.checkSavings = true
    }
});
optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; ++i) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});
sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
        budget: money,
        timeData: 0,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,     
        expensesItem: [],
};