window.onload = function (){//打开页面就加载
	var myObj = document.getElementById('myTest');//取得例子的对象
	function changeCss(){//改变css样式的方法
		if(myObj.className=="test"){//如果test就变成text2
			myObj.className = "test2";
		}else{//不是test就变成test
			myObj.className = "test";
		}
	}
	var but = document.getElementById('myBut');//取得按键的对象
	but.addEventListener("click",function(){//对这个对象实行监听，如果单击就……
		changeCss();//调用改变css的样式的方法
	},false);
}