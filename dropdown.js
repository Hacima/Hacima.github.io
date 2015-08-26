$(document).ready(function() {
    $('.dropDown').hover(function(){
        $('.subMenu', this).css("visibility", "visible");
    }, function() {
        $('.subMenu').css("visibility", "hidden");
    });
});