let money = +prompt('Ваш бюджет в месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
        budget: money,
        timeData: 0,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    }; 
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
/*let i=0;
while (i < 2) {
    state = prompt('Введите обязательную статью расходов в этом месяце', 'Статья');
    summ = +prompt('Во сколько это обойдется?');

    if (state != 'Статья' && (typeof(state)) != null && (typeof(summ)) != null && state != '' && summ != '' && state.length < 50){
        console.log('Done');
        appData.expenses[state] = summ;
        i++;
    } else {
        i--;
    }
}*/
/*let i=2;
do {
    state = prompt('Введите обязательную статью расходов в этом месяце', 'Статья');
    summ = +prompt('Во сколько это обойдется?');

    if (state != 'Статья' && (typeof(state)) != null && (typeof(summ)) != null && state != '' && summ != '' && state.length < 50){
        console.log('Done');
        appData.expenses[state] = summ;
        i--;
    } else {
        i++;
    }
}
while (i != 0);*/
appData.moneyPerDay = appData.budget / 30;
alert('Бюджет на день:' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень зарплаты');
}


