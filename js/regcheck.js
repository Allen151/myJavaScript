var eg = {} ;//声明一个对象，做命名空间

eg.$ = function(id){//定义一个公共函数，用于取得元素
	return document.getElementById(id);
};
eg.regCheck = function(){//点击事件
	var userid = eg.$("userid");
	var upawd = eg.$("userpwd");
	var upawd2 = eg.$("userpwd2");
	var about = eg.$("about");
	if(userid.value == ""){
		alert("账号不能为空");
		eg.err();
		return false ;
	}
	if(upawd.value == ""){
		alert("密码不能为空");
		eg.err();
		return false ;
	}
	if(upawd.value != upawd2.value){
		alert("两次输入密码不相同");
		eg.err();
		return false ;
	}
	if(about.value.length > 60){
		alert("简介太长");
		eg.err();
		return false ;
	}
	return true ;
};
//记录出错次数
eg.err = function(){
	var el = eg.$("errnum");
	var old = el.value;
	el.value = parseInt(old) + 1 ;//强制转换为整形
	eg.lock();//检查是否锁定
};
//通过判断出错次数决定是否锁定注册
eg.lock = function(){
	var err = eg.$("errnum");
	if(err.value > 2){
		eg.$("regBtn").disabled = true ;//锁定按键
		eg.$("regUnlock").style.display="block";//显示解锁按键
		err.value = 0 ;//清除错误次数
	}
};
eg.unlock = function(){
	eg.$("regBtn").disabled = false ;//解锁按键
	eg.$("regUnlock").style.display = "none" ;//隐藏解锁按键
	var rl = eg.$("unlockNum");//解锁次数
	var unlockNum = rl.value ;
	if(unlockNum <= 1){//第一次解锁
		alert("再给三次机会你！！");
		rl.value = 2 ;
	}else if(unlockNum == 2){//第二次解锁
		alert("最后三次机会！！！");
		rl.value = 3 ;
	}else{//第三次解锁
		alert("你已经没机会了，请联系管理员！！");
		eg.$("regUnlock").style.display="none";//两个按键都隐藏
		eg.$("regBtn").style.display="none";
	}

};