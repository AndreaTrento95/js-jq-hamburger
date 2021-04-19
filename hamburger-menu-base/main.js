$(document).ready(function(){
    // referaces
    var header_right = $('.header-right');
    var header_left = $('.header-left');
    var header = $('header');

    // rendo i menù hide quando ci passo sopra col mouse
    // menù di destra
    /* header_right.mouseenter(function(){
        header_right.hide();
    });
    // menù di sinistra
    header_left.mouseenter(function(){
        header_left.hide();
    }) */

    header.mouseenter(function(){
        header.hide();
    });

    header.mouseleave(function(){
        header.show();
    })


    // rendo visibile (show) quando col mouse mi sposto dall'header
   /*  header_right.mouseleave(function(){
        header_right.show();
    })

    header_left.mouseleave(function(){
        header_left.show();
    })
 */




})