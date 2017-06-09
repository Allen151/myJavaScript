var eg = {}//声明一个对象用来做全名空间，好处是不与其他人的方法名重名
eg.fun = function(){//命名空间内定义方法
	alert("点击按钮了");
}
eg.$ = function(element){
	return document.getElementById(element);
}
window.onload=function(){//加载页面时调用
	var but = eg.$("myButton");
	but.addEventListener("click",function(){//添加监听
		eg.fun();
	},false);
}