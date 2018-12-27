$(document).ready(function () {
    $(".h1").click(function () {
        $(".bg1").hide();
    });
    $("h1").click(function () {
        $("bg2").show();
    });
    $(".h1").click(function () {
        for (var i = 0; i < 20; i++) {
            $('.bg2').prepend("<span class='h2'>当前i=" + i + ",append</span>");
            if (i % 2 == 1) {
                // $('.bg2').prepend("\n");
            }
        }
    })
})