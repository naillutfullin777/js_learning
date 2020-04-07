/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
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
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formSend() {
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
}

module.exports = formSend;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
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
}

module.exports = modal;


/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
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
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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
    
    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header'),
        tabs = new SwitchTabs;
    
    tabs.hide(1); 
    
    info.addEventListener('click', (event) => { 
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                        tabs.hide(0); 
                        tabs.show(i); 
                    break;
                }
            }
        }
    });
}

module.exports = tabs;


/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
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

    let deadLine = '2020-06-24', 
        time = new TimeSet;

    time.setClock('timer', deadLine);

    module.exports = timer;
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");
    
        calc();
        form();
        slider();
        tabs();
        modal();
        timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map