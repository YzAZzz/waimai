$(function () {
    let i = 0;
    $(".jia").first().click(function () {
        // console.log(1);
        i++;
        if (i > 1) {
            return;
        }
        else {
            $(".Lbtn:eq(0)").css("display", "block");
            $(".shuliang").html(i);
            $("footer").css("display", "none");
            $(".dibu2").css("display", "block");
            $(".daqian").html(i * 66 + 9 - 20);
        }
    })
    $(".Lbtn").first().click(function () {
        // console.log($(".Lbtn"));
        i--;
        if (i < 1) {
            $(this).css("display", "none");
            $(".shuliang").html("");
            $("footer").css("display", "block");
            $(".dibu2").css("display", "none");
        }
    })



    let q = 0;
    $(".jia").eq(1).click(function () {
        // console.log(1);
        q++;
        if (q > 1) {
            return;
        }
        else {
            $(".Lbtn:eq(1)").css("display", "block");
            $(".shuliang_2").html(i);
            $("footer").css("display", "none");
            $(".dibu2").css("display", "block");
            $(".daqian").html(55 + 72);
        }
    })
    $(".Lbtn").eq(1).click(function () {
        // console.log($(".Lbtn"));
        i--;
        if (q < 1) {
            $(this).css("display", "none");
            $(".shuliang_2").html("");
            $("footer").css("display", "block");
            $(".dibu2").css("display", "none");
        }
    })
})