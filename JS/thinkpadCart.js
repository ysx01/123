/***1 异步请求页头和页尾***/
$('#header').load('header.php',function(){
  //页头加载完成再修改欢迎消息
  $('#welcome').html('欢迎回来：'+loginName);
});
$('#footer').load('footer.php');
//获取当前的登录用户名
var s = location.search;//当前地址栏中URL中的查询字符串部分
var loginName = s.substring(s.indexOf('=')+1);


