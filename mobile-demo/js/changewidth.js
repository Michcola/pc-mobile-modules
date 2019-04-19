// 更改指定元素宽度
$(document).ready(function () {
    var num = parseInt($(window).width() / 100);
    $("#downbox").find("a").css("width", $(window).width() / num - 2);
});