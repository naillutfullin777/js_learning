let menuitems = document.getElementsByClassName('menu-item'),
    numbers = ['Первый пункт', 'Второй пункт', 'Третий пункт', 'Четвертый пункт', 'Пятый пункт'],
    newitem = document.createElement('li');
    textnode = document.createTextNode('Пятый пункт');
    newitem.appendChild(textnode);
    newitem.classList.add('menu-item');
menuitems[0].parentElement.appendChild(newitem);
for (let i=0; i < menuitems.length; i++) {
    menuitems[i].innerHTML = numbers[i];
}
document.body.style.backgroundImage = 'url(../task5/img/apple_true.jpg)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';
let titl = document.getElementById('title'),
    column = document.getElementsByClassName('adv');
column[0].parentNode.removeChild(column[0]);
titl.innerHTML = 'Мы продаем только подлинную технику Apple';
apple = prompt('Каково ваше отношение к техники Appple?', '');
appleprompt = document.getElementById('prompt');
appletextnode = document.createTextNode(apple);
appleprompt.appendChild(appletextnode);
