$(document).ready(function() {
    $('.dropDown').hover(function(){
        $('.subMenu').css("visibility", "visible");
    }, function() {
        $('.subMenu').css("visibility", "hidden");
    });
});