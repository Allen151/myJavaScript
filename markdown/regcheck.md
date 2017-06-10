# 表单验证

**表单验证是JS的另外一个特别的作用，也是JS诞生的原因。想了解更多JS的历史请上维基百科查看，更多精彩的文字内容我是说来出来的。**  
#### 注册账号和登录账号的时候我们都用到过这个功能，如果我们不用JS验证表单，而是直接把内容提交到服务器验证的话，就会很慢，所以开始吧！  
- HTML的表单
  首做一个html表单：
  ```html
  <form method="post" action="" onsubmit="return eg.regCheck();">
	<input type="hidden" name="" id="errnum" value="0" /><!--记录错误次数-->
	账户:<input type="text" name="" id="userid"/> <br /><br />
	密码:<input type="password" name="" id="userpwd"/> <br /><br />
	确认:<input type="password" name="" id="userpwd2"/> <br /><br />
	邮箱:<input type="text" name="" id="email"/><br /><br />
	性别:<input type="radio" name="sex" value="1" checked="checked"/>男
	<input type="radio" name="sex" value="0" />女 <br /><br />
	年龄:
	<select name="" id="age">
	<option value="0" selected="selected">请选择年龄段</option>
	<option value="1">18岁以下</option>
	<option value="2">18-24岁</option>
	<option vlaue="3">24-30岁</option>
	<option value="4">30-35岁</option>
	<option value="5">35岁以上</option>
	</select><br /><br />
	爱好:<input type="checkbox" name="like" value="1" class="like"/>上网
	<input type="checkbox" name="like" value="2" class="like"/>逛街
	<input type="checkbox" name="like" value="3" class="like"/>看电影
	<input type="checkbox" name="like" value="4" class="like"/>其他<br /><br />
	简介:<textarea name="" rows="4" cols="18" id="about"></textarea><br /><br />
	<input type="submit" value="注册" name="" id="regBtn" style="display: block;"/>
	<input type="hidden" name="" id="unlockNum" value="0"/><!--记录解锁次数-->
	<input type="button" value="解锁" style="display: none;" id="regUnlock" onclick="eg.unlock();" name="">
	</form>
  ```  
  - 以上的各个元素都有自己的唯一id，各个标签都是html的基本标签，应该比较好理解。  
  - form返回JS的eg.regCheck()方法的调用结果。详细在JS篇。
  - id为errnum的元素是用来记录填写信息错误的次数。不需要被用户看到，所以隐藏`type="hidden"`。
  - 性别选择的`type="radio"`，只能选中其中的一项，`checked="checked"`，代码默认选中。
  - 年龄是下拉单选项，`value`用来标记选中的项，`selected="selected"`代码默认选中。
  - 爱好是`type="checkbox"`，多项选择，name、class相同，用于获取全部爱好标签。value不同，用来区分不同内容。
  - 注册的类型`type="submit"`，点击时触动form调用的方法。
  - 解锁的次数是个多余的功能。
  - 解锁按钮是当注册错误达到3次时才会出现。
- JS篇
  - 创建自己的命名空间
  ```javascript
    var eg = {} ;//声明一个对象，做命名空间
    eg.$ = function(id){//定义一个公共函数，用于取得元素对象
	  return document.getElementById(id);
	};
  ```  
    每次传递id参数调用`eg.$(id)`方法就可以获取对象的对象。
  - eg.regCheck()方法详细介绍  
  **以验证账号为例** 
  ```javascript
  eg.regCheck = function(){//点击事件
	var userid = eg.$("userid");
	if(userid.value == ""){
		alert("账号不能为空");
		eg.err();
		return false ;
	}
	return true ;
  }
  ```  
  取得对象，判断值如果为空就提示用户，并且调用`eg.err()`方法，返回false表示注册失败。  
  **eg.err()方法**  
  ```javascript
  eg.err = function(){
	var el = eg.$("errnum");
	var old = el.value;
	el.value = parseInt(old) + 1 ;//强制转换为整形
	eg.lock();//检查是否锁定
	};
  ```
  取得记录错误次数的值，为其值加1，调用`eg.lock()`方法，判断是否应该锁定按钮。  
  **eg.lock()方法**  
  ```javascript
  eg.lock = function(){
	var err = eg.$("errnum");
	if(err.value > 2){
		eg.$("regBtn").disabled = true ;//锁定按键
		eg.$("regUnlock").style.display="block";//显示解锁按键
		err.value = 0 ;//清除错误次数
	}
  };
  ```  
  取得错误次数，如果错误的次数在3次以上，就将注册按钮锁定，同时将解锁按钮显示出来，最后将错误次数清零。  
  **解锁之后的事情**  
  我们回到HTML的最后一行找到`onclick="eg.unlock();"`，解锁后调用eg.unlock()方法，我们看看此方法做了哪些操作。  
  **eg.unlock()方法**  
  ```javascript  
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
  ```
  将注册按钮打开，解锁按钮隐藏，取得解锁的次数，根据解锁的次数给出不同的提示，第三次解锁就将两个按钮都隐藏起来，阻止你继续注册。  
  ~~**到这里呢，简单的表单验证已经结束了！**~~  
- 我们来讨论一下不简单的东西。  
  - 邮箱验证  
  ```javascript
  if(!/^[A-Za-z\d]+[A-Za-z\d\-_\.]*@([A-Za-z\d]+[A-Za-z\d\-]*\.)+[A-Za-z]{2,4}$/.test(email.value)){
  //正则表达式验证邮箱
	alert("请输入正确的邮箱！！");
	eg.err();
	return false ;
  }
  ```