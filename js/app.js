$(document).ready(function(){
    $('#toggle').click(function(){
        $('.search').toggleClass('isOpen');
        $('.header').toggleClass('isOpen');
        $('.menu').toggleClass('isOpen');
    })
})