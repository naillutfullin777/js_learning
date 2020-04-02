window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    //Classes
    //class 'SwitchTabs' - класс, который мы используем для навигации по табам
    class SwitchTabs {
        constructor(a) {
            this.a = a;
        }
        hide(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        show(a) {
            if (tabContent[a].classList.contains('hide')) {
                tabContent[a].classList.remove('hide');
                tabContent[a].classList.add('show');
            }
        }
    };
    //end of SwitchTabs class
    //class 'TimeSet' - используем для запуска таймера
    class TimeSet {
        constructor(id, endtime) {
            this.endtime = endtime;
            this.id = id;
        }
        setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000, endtime, hours, minutes, seconds);
            
            function updateClock(endtime, hours, minutes, seconds) {  
                let 
                    total = Date.parse(endtime) - Date.parse(new Date()),
                    time = {
                    'hours' : Math.floor((total/(1000*60*60))),
                    'minutes' : Math.floor((total/1000/60) % 60),
                    'seconds' : Math.floor((total/1000) % 60)
                };

                if (time.hours <= 9) {
                    hours.textContent = '0' + time.hours;
                } else {
                    hours.textContent = time.hours;
                };
    
                if (time.minutes <= 9) {
                    minutes.textContent = '0' + time.minutes;
                } else {
                    minutes.textContent = time.minutes;
                };
    
                if (time.seconds <= 9) {
                    seconds.textContent = '0' + time.seconds;
                } else {
                    seconds.textContent = time.seconds;
                };
    
                if (total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '0';
                    minutes.textContent = '0';
                    seconds.textContent = '0';
                };
            }
        }
    };
    //end class "TimeSet"
    //end of classes

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        deadLine = '2020-06-24', //Дата обратного отсчета
        time = new TimeSet,
        tabs = new SwitchTabs;
    
    //Скрываем ненужные табы и добавляем обработчик события на "info-header"
    tabs.hide(1); 
    info.addEventListener('click', (event) => { 
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    tabs.hide(0); // Используем метод hide() класса SwitchTab для скрытия ненужных табов
                    tabs.show(i); // Используем метод show() класса SwitchTab для показа нужного таба
                    break;
                }
            }
        }
    });
        
    time.setClock('timer', deadLine); // Запускаем обратный отсчет

    //Код для открытия popup-окна формы обратной связи

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        moretabs = document.querySelectorAll('.description-btn'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Открываем форму обратной связи при клике на "Узнать больше" в табах
    for (let i = 0; i < moretabs.length; i++) {
        moretabs[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    //Форма отправки 

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let popupForm = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        popupInput = popupForm.getElementsByTagName('input'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
    
   //Функция отправки POST
   function send(form, input) {
        let promise = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        let formData = new FormData(form),
            obj = {};

        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.onload =  function() {
            if (request.readyState < 4) {
                resolve(message.loading);
            } else if (request.readyState === 4 && request.status == 200) {
                resolve(message.success);
            } else {
                reject(message.failure);
            }
        };
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
        });
        promise.then(
            result => {
                statusMessage.innerHTML = result;
                console.log('Done');
            },
            error => {
                statusMessage.innerHTML = error;
                console.log('Error');
            }
        );
    };
    //конец функции 

    //Всплывающая форма
    popupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        popupForm.appendChild(statusMessage);
        send(popupForm, popupInput);
    });
    //Контактная форма
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);
        send(contactForm, contactInput);
    });

    //Код слайдера
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    };
    function plusSlides(n) {
        showSlides(slideIndex += n);
    };
    function currentSlide(n) {
        showSlides(slideIndex = n);
    };
    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //Калькулятор
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(restDays.value == '') {
                totalValue.innerHTML = 0;
            } else if(persons.value == '' || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });
        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(persons.value == '') {
                totalValue.innerHTML = 0;
            } else if(restDays.value == '' || restDays.value == 0){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });
        place.addEventListener('change', function() {
            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = '';
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
});