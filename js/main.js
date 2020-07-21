/* 
This page made by : Youssef Abdelzaher;
This page made in : 1day;
Mr.Youssef Abdelzaher tell you wellcome in his page
*/
/*global $, alert, console*/
$('html').niceScroll({
    cursorcolor:"var(--color)",
    cursorwidth:"10px",
    background:"#3a3a3a",
    cursorborder:"none",
    cursorborderradius:0,
    cursorzindex:"999999999"
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
/* Start head Section */

var myheader = $(".head .myheader").innerHeight();
$("body").css("paddingTop", myheader);$("body").css("paddingTop", myheader);

$(window).resize(()=>{
    $("body").css("paddingTop", myheader);
});

$(window).scroll(()=>{
    if($(window).scrollTop() > 100){
        $(".myheader").css({
            opacity:'.7',
        });
    }
    else{
        $(".myheader").css({
            opacity:'1',
        });
    }

});


/* End head Section */

