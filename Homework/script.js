$(document).ready(function() {
    $('[href = #sheldure], [href = #tour], .main_btn').click(function() {
        $('.overlay').animate({opacity: 'show'}, 3000);
        $('.modal').animate({height: 'show'}, 3000);
    });
    $('[aria-label = Close]').click(function() {
        $('.overlay').animate({opacity: 'hide'}, 3000);
        $('.modal').animate({height: 'hide'}, 3000);
    });
});