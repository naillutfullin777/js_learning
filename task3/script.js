let money, time;
function start() {
    money = +prompt('Ваш бюджет в месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
}
start();
let appData = {
        budget: money,
        timeData: 0,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    }; 

function chooseExpenses(){
    for (i=0; i < 2; i++) {
        state = prompt('Введите обязательную статью расходов в этом месяце', 'Статья');
        summ = +prompt('Во сколько это обойдется?');
    
        if (state != 'Статья' && (typeof(state)) != null && (typeof(summ)) != null && state != '' && summ != '' && state.length < 50){
            console.log('Done');
            appData.expenses[state] = summ;
        } else {
            i--;
        }
    }
}

chooseExpenses();

appData.moneyPerDay = appData.budget / 30;
alert('Бюджет на день:' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень зарплаты');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень зарплаты');
} else {
    console.log('Произошла ошибка');
}

function checkSavings() {
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений?'),
            percent = promt('Какой процент?');
        
        appData.moneyIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.moneyIncome);
    }
}

checkSavings();
