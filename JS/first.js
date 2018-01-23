/**
 * Created by Administrator on 2017/1/15 0015.
 */
//动态菜单
$(document).ready(function(){
    $(".nav >li").hover(function(){
        $(this).find("a").stop().animate({
            marginTop: "-10"
        },250);
    } , function(){
        $(this).find("a").stop().animate({
            marginTop: "0"
        },250);
    });
});

