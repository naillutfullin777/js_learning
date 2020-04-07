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