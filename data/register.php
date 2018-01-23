<?php 
	header("Content-Type:application/json;charset=utf-8");
	$uname = $_REQUEST['uname'];
	$upwd =$_REQUEST['upwd'];
	if(empty($uname)||empty($upwd)){
		echo "[]";
	}
	$conn =mysqli_connect('127.0.0.1','root','','thk',3306);
	$sql ="set names utf8";
	mysqli_query($conn,$sql);
	$output = ['code'=>0,'msg'=>null];
	
	$sql="select * from user where uname='$uname' ";
	$result=mysqli_query($conn,$sql);
	
	if(mysqli_fetch_assoc($result)!=null){
		$output['code']='1001';
		$output['msg']='用户名存在，请重新注册！';
	}else{
		$sql="insert into user values(null,'$uname','$upwd') ";
		$result=mysqli_query($conn,$sql);
		if($result){
			$output['code']='1000';
			$output['msg']='用户注册成功';
		}else{
			$output['code']='1002';
			$output['msg']='用户注册失败';
		}
	}
	echo json_encode($output);
?>

