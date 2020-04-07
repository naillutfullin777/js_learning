window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    
    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        modal = require('./parts/modal.js'),
        timer = require('./parts/timer.js');
    
        calc();
        form();
        slider();
        tabs();
        modal();
        timer();
});