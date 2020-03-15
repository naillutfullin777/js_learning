let money, time;
function start() {
    money = +prompt('Ваш бюджет в месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
}
start();
let appData = 
{
        budget: money,
        timeData: 0,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
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
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log('Минимальный уровень достатка');
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('Средний уровень зарплаты');
            } else if (appData.moneyPerDay > 2000) {
                console.log('Высокий уровень зарплаты');
            } else {
                console.log('Произошла ошибка');
            }
        },
        checkSavings: function() {
            if (appData.savings == true){
                let save = +prompt('Какова сумма накоплений?'),
                    percent = prompt('Какой процент?');
                
                appData.moneyIncome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита: ' + appData.moneyIncome);
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = appData.budget / 30;
            alert('Бюджет на день:' + appData.moneyPerDay);
        },
        chooseOptExpenses: function() {
            for (i=0; i < 3; i++) {
                state = prompt('Статья необязательных раходов?');
                summ = +prompt('Во сколько это обойдется?');
            
                if (state != 'Статья' && (typeof(state)) != null && (typeof(summ)) != null && state != '' && summ != '' && state.length < 50){
                    console.log('Done');
                    appData.optionalExpenses[state] = summ;
                } else {
                    i--;
                }
            }
        },
        chooseIncome: function() {
            let items = prompt('Что принесет дополнительный доход? (Через запятую): ', '');
                incomes = '';
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
            this.income.forEach(function(item, i) {
                incomes = incomes + (++i + ' ' + item + '; ');
            });
            alert('Способы дополнительного заработка: ' + incomes);
        }
    }; 
   for (var i in appData) {
       if (appData.hasOwnProperty(i)) {
           console.log(appData[i])
       }
   };

   let y = 1; let x = y = 2; alert(x); 