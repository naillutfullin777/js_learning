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