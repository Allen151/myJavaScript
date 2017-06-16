# 执行环境及作用域  
这个学习速度真的很慢呀，一两天才一个知识点，但是这样学习效果很好，加强了自己的理解，又用自己的语言总结出了各个知识点，复习的时候看自己写的文字倍感亲切，虽然有很多错别字，或标点符号的错误……。例如这句话就有很多错用的标点符号。又有什么所谓呢？  

这个文档目录：
  - 执行环境及作用域  
  - 延长作用域链  
  - 没有块级作用域  

---  

## 执行环境及作用域  
### 执行环境
>- 执行环境是JavaScript中最为重要的一个概念。执行环境定义了变量和函数可以访问的数据，每个执行环境都有一个与之关联的**变量对象**，环境中定义的所有变量和函数都保存在这个变量对象中。我们无法访问这个对象，但是解析器在处理数据时在后台会使用它。
>- 全局执行环境是最外围的执行环境，在web浏览器中，全局执行环境被认为是window对象，因此所有的全局变量和函数都被认为是这个对象的属性和方法创建的。某个环境中的所有代码执行完毕后，该环境被销毁，保存在其中的变量和函数也随之销毁，全局变量和函数在浏览器被关闭时也销毁。
>- 每个函数都有自己的执行环境，当执行流进入一个函数时，函数所在的环境就被推入一个环境栈中。函数执行完后栈将其环境弹出，把控制权交还给其父执行环境。
>- 当代码在一个执行环境中执行时，会创建一个变量对象的**作用链**。作用链的作用是用来指定各个环境执行的顺序，作用链的最前端是正在执行的代码所在的变量对象。如果正在执行的是函数，就将其**活动对象**作为变量对象，最开始时只包含`arguments`对象（这个对象在全局环境中是不存在的）。这个环境执行完就推给其父环境，一直到全局执行环境，全局执行环境是作用链最后的一个对象。
>- 标识符解析是沿着作用链一级级地向上搜索的，一直往父环境寻找，直到找到，找不到就报错。**这就是为什么不能使用子环境的标识符。**  
---
概念就是这样，也比较好理解，看明白会很好理解下面的内容。  
```javascript
<script type="text/javascript">
	var color = "blue" ;//全局变量

	function changeColor(){
		if(color === "blue"){//使用全局变量
			color = "red" ;
		}else{
			color = "blue" ;
		}
	}

	changeColor() ;//调用方法

	alert("现在的color是 :"+color);//red
</script>
```
`changeColor()`方法的执行环境中有两个对象：一、`arguments`对象，二、全局环境的变量对象。我们可以在`changeColor()`方法内使用`color`变量，因为`color`变量在`changeColor()`方法的父环境中，在本环境找不到就追寻到父环境中找。  

在父环境中就不能使用子环境的变量，在子环境中可以将父环境与子环境的变量相互使用，正如下面这个例子： 
```javascript
<script type="text/javascript">
	var color = "blue" ;

	function anotherColor(){
		//这里可以访问color、anotherColor，但不能访问tempColor
		var anotherColor = "red" ;

		function changeColor(){
			//这里可以访问color、anotherColor、tempColor
			var tempColor = anotherColor ;
			anotherColor = color ;
			color = tempColor ;
		}

		changeColor();
	}

	anotherColor()
	alert("改变了color:"+color);//red
</script>
```
内部环境可以通过作用链访问外部环境的变量和函数，但外部环境不能访问内部环境的变量和函数。这些环境之间是线性的、有序的。每个环境都可以向上搜索作用域链，以查询变量和函数名。但是任何环境都不能通过向下搜索作用域链而进入另一个执行环境。**函数的参数也被当作变量来对待，所以其访问规则也与执行环境中的变量相同。**

## 延长作用域链  
把各个执行环境联接起来就叫作用域链，执行环境有两种——全局和局部（函数），但是有些情况是可以在函数内部增加一个变量对象，这种变量对象会在代码执行完后被移除，这种现象就是延长作用链。  
在这两种情况下会发生作用链延长：  
- try-catch语句的catch块；  
  catch语句会创建一个新的对象，用来存放被抛出的错误对象的声明。
- with语句。  
  会将指定的对象添加到作用域链中。
例子：  
```javascript
<script type="text/javascript">
	function buildUrl(){
		var qs = "?debug=true" ;

		with(location){
			var url = href + qs ;
		}
		return url ;
	}
	//file:///D:/IT/github/myJavaScipt/test.html?debug=true
	alert(buildUrl()); 
</script>
```
`with语句`接收的`location对象`，`with变量对象`中就包含了`location对象`的所有属性和方法的使用权，当使用变量`href`时，在最前端环境找不到就往上找，在`location`中找到了，实际上是`location.href变量`。在`with语句`内部定义的`url变量`竟然就成了函数执行环境的一部分，然后就可以用`return`将其作为函数的返回值了。
## 没有块级作用域  



## 总结 
