$(document).ready(function(){
    // referances
    var hamburger_menu = $('.hamburger-menu');
    var hamburger_lista = $('.hamburger-menu ul li a');
    var haburger_hide = false;
    var header_right_ul = $('.header-rigth ul');


    // 
    hamburger_menu.click(function(){
       hamburger_menu.hide();
       hamburger_hide = true;
    })

    if(hamburger_hide){
        header_right_ul.show();
    }

})