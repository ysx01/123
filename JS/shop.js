$(function(){
    var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
    var len = $("#focus ul li").length; //获取焦点图个数
    var index = 0;
    var picTimer;

    //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
    var btn = "<div class='btnBg'></div><div class='btn'>";
    for(var i=0;i< len;i++){
        	btn += "<span></span>";
    	}
    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
    $("#focus").append(btn);
    $("#focus .btnBg").css("opacity",0.5);

    //为小按钮添加鼠标滑入事件，以显示相应的内容
    $("#focus .btn span").css("opacity",0.4).mouseover(function(){
        index = $("#focus .btn span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseover");

    //上一页、下一页按钮透明度处理
    $("#focus .preNext").css("opacity",0.2).hover(function(){
        $(this).stop(true,false).animate({"opacity":"0.5"},300);
    },function(){
        $(this).stop(true,false).animate({"opacity":"0.2"},300);
    });

    //上一页按钮
    $("#focus .pre").click(function(){
        index -= 1;
        if(index == -1){
           index = len - 1;
        }
       	showPics(index);
    });

    //下一页按钮
    $("#focus .next").click(function(){
        index += 1;
        if(index == len){
            index = 0;
        }
        showPics(index);
    });

    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
    $("#focus ul").css("width",sWidth * (len));

    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    $("#focus").hover(function(){
        clearInterval(picTimer);//清除定时器
    },function(){
        picTimer = setInterval(function(){//设置定时器
            showPics(index);//根据当前图片下标调用图片显示函数
            index++;//当前图片下标自增
            if(index == len){
                index = 0;
            }
        },3000); //此3000代表自动播放的间隔，单位：毫秒
    }).trigger("mouseleave");

    //显示图片函数，根据接收的index值显示相应的内容
    function showPics(index){ //普通切换
        var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
        $("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
        //$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
        $("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
    }
});


/*新闻滚动*/
/**
 *1.鼠标对新闻触发mouseout事件后每2s调用scrollNews()
 *2.鼠标对新闻触发mouseover事件后停止调用scrollNews()
 *3.初次加载页面触发鼠标对新闻的mouseout事件
 * */
$(function(){
    //初始化滚动时间
    var scrollTimer = null;
    //设置滚动时间
    var time = 2000;
    //获取
   $('.news_main').hover(function(){
       //清除定时器
       clearInterval(scrollTimer);
   },function(){
           //设置定时器，调用滚动方法
           scrollTimer = setInterval(function(){
               scrollNews();
           },time);
       }).triggerHandler('mouseout');//触发指定的事件
});

//滚动方法
function scrollNews(){
    //获取新闻，并保存给变量 $news
    var $news = $('.news_main>ul');
    //获取ul下第一个子元素的行高
    var $lineHeight = $news.find('li:first').height();
    //设置滚动效果
    $news.animate({ 'marginTop': -$lineHeight + 'px' }, 600, function () {
        $news.css({ margin: 0 }).find('li:first').appendTo($news);
    });
}



//动态菜单
$(document).ready(function(){
    $(".top_nav>ul>li").hover(function(){
        $(this).find("a").stop().animate({
            marginTop: "-10"
        },450);
    } , function(){
        $(this).find("a").stop().animate({
            marginTop: "0"
        },450);
    });
});


//回到顶部

window.onload = function(){
    var shoptop =document.getElementsByClassName('shoptop')[0];
    //获取页面可视区域高度
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var istop = true;
    //滚动条滚动时触发
    window.onscroll = function(){
        var sTop = document.documentElement.scrollTop||document.body.scrollTop;
        //判断高度决定按钮的显示与隐藏
        if(sTop >= clientHeight){
            shoptop.style.display = 'block';
        }else{
            shoptop.style.display = 'none';
        }
        if(!istop){
            clearInterval(timer);
        }
            istop = false;
    }
    shoptop.onclick = function(){
        //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离顶部的高度
            var sTop = document.documentElement.scrollTop||document.body.scrollTop;
            var isped =Math.floor(-sTop / 6);//向下取舍math.floor
            document.documentElement.scrollTop = document.body.scrollTop -=sTop + isped;
            istop = true;
            if(sTop == 0){
                clearInterval(timer);
            }
        },30)

    }
}





