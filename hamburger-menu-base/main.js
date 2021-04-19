$(document).ready(function(){
    // referances
    var hamburger_menu = $('.hamburger-menu');
    var header_rigth_a = $('.fas.fa-bars');
    var close = $('.fas.fa-times');


    // cliccando sull'icona dell' hamburger-menu mostro l'hamburger menu
    header_rigth_a.click(function(){
        hamburger_menu.fadeIn(2000);
    })

    // cliccando due volte sulla x dell'hamburger menu nascondo l'hamburger menu
    close.dblclick(function(){
        hamburger_menu.fadeOut(2000);
    })

})