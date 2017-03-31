/**
 * Created by 胡锋 on 2017/03/30.
 */
$(function () {
    //第一屏
    $(".intro").click(function () {
        $(".popup").show();
    });
    $(".popup").click(function () {
        $(".popup").hide();
    });


    //第四屏
    // var timer = setTimeout(function () {
    //     $(".scan").show();
    // },2000);
    //
    // $("#weixin").mouseover(function () {
    //     $(".scan").show();
    // });
    // $("#weixin").mouseout(function () {
    //     $(".scan").css("display","none");
    // });

    $("#weixin").mouseover(function () {
        $(".scan").fadeIn(1000,function () {
            $(".scan").show();
        })
    });
    $("#weixin").mouseout(function () {
        $(".scan").fadeOut(1000,function () {
            $(".scan").css("display", "none");
        })
    });

});
// 延迟定时器	(用全局变量接收设定再调用取消)
// var 全局变量=setTimeout("函数(执行代码)",'时间(毫秒)')
// 取消定时器
// clearTimeout(全局变量)

// 淡入动画
// $("标签").fadeIn(时间值)
// 淡出动画
// $("标签").fadeOut(时间值)



