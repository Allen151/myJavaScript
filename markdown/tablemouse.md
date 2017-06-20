# 为表格添加鼠标事件  
这是慕课网的课程中的一个实例，[编程练习](http://www.imooc.com/code/1636)

制作一个表格，显示班级的学生信息。  
**要求：**
1. 鼠标移到不同行上时背景色改为色值为 #f2f2f2，移开鼠标时则恢复为原背景色 #fff
2. 点击添加按钮，能动态在最后添加一行
3. 点击删除按钮，则删除当前行

## 颜色的变化  
首先创建一个简单表格，添加一些属性让表格看起来更好看，每一行表格都有一个`a`标签添加删除选项，最后一行有`id`。就是这么一个简单的表格。
```html
<table id="mesTable" border="1" cellspacing="0" cellpadding="5" bgcolor="#ddd" width="50%">
	<tr id="headTr">
		<th>姓名</th>
		<th>年龄</th>
		<th>学历</th>
		<th>操作</th>
	</tr>
	<tr>
		<td>张三</td>
		<td>18</td>
		<td>本科</td>
		<td><a href="#">删除</a></td>
	</tr>
	<tr>
		<td>李四</td>
		<td>24</td>
		<td>研究生</td>
		<td><a href="#">删除</a></td>
	</tr>
	<tr>
		<td>王五</td>
		<td>60</td>
		<td>小学</td>
		<td><a href="#">删除</a></td>
	</tr>
	<tr id="oneTr"><!--这一行表格用来作为添加的副本-->
		<td></td>
		<td></td>
		<td></td>
		<td><a href="#">删除</a></td>
	</tr>
</table>
``` 
下面编写一个方法，接收两个参数，第一个是对象，我们将触动调用这个方法的对象传递入来，也就是一行表格。另一个参数是颜色，要改变后的颜色。这个方法将调用这个方法的对象原来的背景色改变。
```javascript
//改变表格的方法
var changeColor = function(obj, color){
	obj.bgColor = color ;//不知道Color为什么要大写
}
```
接下来调用这个方法，有两个事件，一是移进来，二是移出去，分别改成不同的颜色就可以了。：  
```javascript
//变色,获取全部标签，循环遍历各行，绑定事件
var trChangeColor = document.getElementsByTagName("tr");
for(var i=0; i<trChangeColor.length; i++){
	trChangeColor[i].addEventListener("mouseover", function(){
		changeColor(this, "#fff");
	}, false);

	trChangeColor[i].addEventListener("mouseout", function(){
		changeColor(this, "#ddd");
	}, false);
}
```

## 按钮动态添加一行  
我们重新看一遍下面这个代码，两个元素有`id`,第一个是表格的最后一行，将来被用来复制的。另一个个是按钮，用来添加事件。  
```html
	<tr id="oneTr"><!--这一行表格用来作为添加的副本-->
		<td></td>
		<td></td>
		<td></td>
		<td><a href="#">删除</a></td>
	</tr>
</table>
<br />
<button id="addTr">添加</button>
```
添加一行的方法如下，将最后一行复制一份出来，再把复制出来的那份添加到表格的最后。
```javacript
var addTr = function(){
	var newTr = document.getElementById("oneTr").cloneNode(true);//将最后一行复制 
	document.getElementById("mesTable").appendChild(newTr);//粘贴到表格的最后
}
```
调用方法，直接调用上面的方法就可以了：
```javascript
	//添加一行表格
	var addButton = document.getElementById("addTr") ;
	addButton.addEventListener("click", function(){
		addTr();
	}, false);
```
## 删除一行表格  
删除表格要用到的方法,`obj`是删除连接所在的对象，`tr`是一行的对象，`tbody`是整个表格对象，用整个表格对象来操作删除一行：  
```javascript
//实现删除的方法
var deleteTr = function(obj){
	var tr=obj.parentNode.parentNode;  //obj是a的对象，tr是tr的对象
	var tbody=tr.parentNode;  			//表格对象
	tbody.removeChild(tr);  
}
```
调用删除的方法：
```javascript
	//删除，跟上面同理，调用删除方法
	var trDelete = document.getElementsByTagName("a");
	for(var i=0; i<trDelete.length; i++){
		trDelete[i].addEventListener("click", function(){
			deleteTr(this);
		}, false);
	}
```

写到这里呢，就完成了，总的来说，总是写方法，然后事件触动方法。就这么一个思路。