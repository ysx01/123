//login
var  log = document.getElementById('login');
var  md = document.getElementsByClassName('modal')[0];
 function login(){
 	md.style.display='block';
 };

 //关闭
 var cl = document.getElementById('clse');
 cl.click=function(){
 	this.parentNode.parentNode.parentNode.style.display='none';
 }

//连接数据库进行异步验证
$('#bt-login').click(function(){
	//将用户输入的数据序列化并保存在变量data中
	var  data = $('#login-form').serialize();
	//发送请求
	$.post('data/login.php',data,function(obj){
		if(obj.code==='1000'){//验证成功
            $('.modal').css('display',"none");//关闭登录框
			loginName = $('[name="uname"]').val();
            $('#welcome').parent().html("欢迎"+loginName+"来到联想商城!");
			//将用户信息保存在sessionStorage
			sessionStorage.setItem("loginName",loginName);
		}else{
			$('.modal .alert').html(obj.msg);
		}
	})
});
