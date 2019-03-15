$(function () {
    var login = $('.darker');
    var botao = $('.log');
    botao.on('click',function () {
        login.toggleClass("active");
        login.removeClass("darker")
    });
});
$(function () {
    var crs = $('.x');
    var de = $('.point');
    de.on('click',function () {
        crs.toggleClass("darker");
        crs.removeClass("active")
    });
});