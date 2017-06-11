# 基础2  
## 变量  
与变量相对的是常量，常量是不可改变的，例如1就是1，2就是2。变量是可以改变的，例如数学里的x、y。  
**定义一个变量**  
```javascript
<script type="text/javascript">
	var x;//定义一个变量
	var y = 10; //定义的同时声明变量 
</script>
```
上面的x、y就是变量，x还没有声明值，系统默认它的值是undefined。  
JS中变量声明时并不用指定数据类型，因为JS是弱类型语言，意思是说每种数据类型间可以随意转换。在数据类型中我们再详细说明。  
那这时候问题就来了——应该怎么定义一个变量名呢？  
**变量名的规则**  
>变量必须以字母开头  
变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）  
变量名称对大小写敏感（y 和 Y 是不同的变量）    

选择变量名的时候，尽量选择能明其意的英语单词，用驼峰式命名。  
例如：myName、myPassword。之类，首单词小写，后面每个单词的首字母都是大写。

## 数据类型  
**JS的弱类型语言，不用指定变量的数据类型。**  
但是JS还是有几种基本的数据类型的，我们还是要好好认识一下它们。    
在java中，字符串类型的变量我们是这样定义的`String a = "myname" ;`，在JS中不用这么麻烦，我们直接定义`var a = "myname" ;`，就行了，不用指定类型。  
在java中，如果我们想改变a的值为数字类型`a = 10 ;`就会报错，在JS中完全不用担心这个问题，因为JavaScript 拥有**动态类型**  
~~下面我们开始学习各种数据类型吧~~  
~~**基本数据类型**~~
### 字符串  
```javascript
<script type="text/javascript">
	var myName = "Allen151" ;//字符串要用引号括起来
	document.write("you name:"+myName);
</script>
```  

### 数字  
```javascript
<script type="text/javascript">
	var myAge = 20 ;//数字类型不用括起来
	document.write("you age:"+myAge);
</script>
```
### 布尔值  
布尔值只有两个值，true或false。
```javascript
<script type="text/javascript">
	var no = false ;
	var yes = true ; 
</script>
```
### 数组  
- 实例化对象声明数组  
`new Array(2)`括号里的2是指数组的长度，但是你超出长度也不会有错误。第一个数组是从零开始数的，这一点容易忽略。  
```javascript
<script type="text/javascript">
	var a = new Array(2);//声明一个数组
	a[0] = 1 ;//分别为各个数组赋值
	a[1] = 2 ;
	for(var i=0;i<a.length;i++){//循环输出各个数组
		document.write(a[i]);
	}
</script>
```  
- 声明的同时赋值  
也可以在声明的同时赋值，这时候括号里的内容跟上面说的就不同了。
```javascript
<script type="text/javascript">
	var a = new Array("1","2");
	for(var i=0;i<a.length;i++){//循环输出各个数组
		document.write(a[i]);
	}
</script>
```  
- 中括号声明法  
这种方法比较简洁，一个中括号就代组是一个数组，后面将学习到一个大括号代表一个数组。
```javascript
<script type="text/javascript">
	var a = ["1","2"] ;
	for(var i=0;i<a.length;i++){//循环输出各个数组
		document.write(a[i]);
	}
</script>
```
 
### Null  
如果你只是声明一个对象，没有赋值，这个对象的值就是Null。
### Undefined
如果你还没声明该对象，该对象的类型就是undefined.

~~**对象数据类型**~~
### 对象  
**用大括号声明对象**  
对象有一定的属性，属性有一定的值，语法格式看代码。以下还有两种取得属性的方法。
```javascript
<script type="text/javascript">
	//声明一个对象，并且赋值
	var me = {myName:"Allen151",myAge:20,myNumber:"123456789"} ;
	//获取对象的属性和值，这里用到两种方法
	document.write("姓名："+me.myName+"、年龄："+me["myAge"]+"、电话："+me.myNumber);
</script>
```
## 操作符  
```javascript
```

## 语句  


## 函数  


## 总结