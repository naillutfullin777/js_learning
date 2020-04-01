let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function() {
     let promise = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', 'current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
        request.onload = function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                resolve(inputRub.value / data.usd);
            } else {
                reject(new Error(request.statusText));
            }
        };
        request.onerror = function() {
            reject(Error("Сетевая ошибка"));
        };
        request.send();
    });
    promise
        .then(
            result => inputUsd.value = result, 
            error => inputUsd.value =  error
        )
});