<?php 
	header('Content-Type:application/json;charset=utf-8');
	//获取数据
    $uname = $_REQUEST['uname'];
    $upwd = $_REQUEST['upwd'];
    //连接数据库
	$conn = mysqli_connect('127.0.0.1','root','','thk',3306);
	$sql = "set names utf8";
	mysqli_query($conn,$sql);
	$sql ="select * from user where uname='$uname'and upwd='$upwd'";
	$result = mysqli_query($conn,$sql);
	//定义数字并初始化
	$output =['code'=>0,'msg'=>null];
	//判断结果集
	if($result==null){
		$output['code']='1001';
		$output['msg']='sql 语句错误!';
	}else{
		//提取数据判断
		$row = mysqli_fetch_assoc($result);
		if($row==null){
			$output['code']='1002';
			$output['msg']='用户名或者密码错误!';
		}else{
			$output['code']='1000';
			$output['msg']='用户信息验证正确!';
		}
	}
	echo json_encode($output);
	
?>